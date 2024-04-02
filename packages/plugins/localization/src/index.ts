import { EventEmitter } from "events";
import { promises } from "fs";
import path from "path";

interface LocalizationOptions {
  path: string;
  autoReload?: boolean;
  autoReloadInterval?: number;
}

export default class Localization extends EventEmitter {
  public options: LocalizationOptions;
  public languages: Map<string, object>;
  public initialized: boolean;
  public autoReloadInterval: NodeJS.Timeout | null;

  constructor(options: LocalizationOptions) {
    super();
    this.options = options;
    this.languages = new Map();
    this.initialized = false;
    this.autoReloadInterval = null;
  }

  public async init(): Promise<void> {
    const exists = await this.pathExists(this.options.path);

    if (!exists) {
      throw new Error(`Invalid path provided. Path "${this.options.path}" does not exist in your root directory.`);
    }

    if (this.initialized) {
      throw new Error("Localization has already been initialized.");
    }

    try {
      await this.processDirectory(this.options.path, this.languages);
      this.emit("ready");
      this.initialized = true;

      if (this.options.autoReload) {
        this.setupAutoReload();
      }
    } catch (error: any) {
      throw new Error(`Error during initialization: ${error.message}`);
    }
  }

  public getKey(language: string, key: string, placeholders: Record<string, string> = {}): string {
    if (!this.initialized) throw new Error("Localization has not been initialized.")

    const languageData = this.languages.get(language);

    if (!languageData) {
      throw new Error(`Invalid language provided. Expected a valid language. Received ${language}`);
    }

    const keys = key.split(".");
    let nestedValue: any = languageData;

    for (const nestedKey of keys) {
      if (!nestedValue[nestedKey]) {
        throw new Error(`Invalid key provided. Expected a valid key. Received ${key}`);
      }

      nestedValue = nestedValue[nestedKey];
    }

    if (typeof nestedValue === "string" && Object.keys(placeholders).length > 0) {
      nestedValue = this.replacePlaceholders(nestedValue, placeholders);
    }

    return nestedValue;
  }

  public getRaw(language: string): object {
    if (!this.initialized) throw new Error("Localization has not been initialized.")

    const languageData = this.languages.get(language);

    if (!languageData) {
      throw new Error(`Invalid language provided. Expected a valid language. Received ${language}`);
    }

    return languageData;
  }

  public getLanguages(): Map<string, object> {
    if (!this.initialized) throw new Error("Localization has not been initialized.")

    return this.languages;
  }

  public setupAutoReload(): void {
    const { autoReloadInterval } = this.options;

    this.autoReloadInterval = setInterval(async () => {
      try {
        await this.processDirectory(this.options.path, this.languages);
        this.emit("reload");
      } catch (error: any) {
        console.error(`Error during auto-reload: ${error.message}`);
      }
    }, autoReloadInterval);
  }

  public stopAutoReload(): void {
    if (this.autoReloadInterval) {
      clearInterval(this.autoReloadInterval);
      this.autoReloadInterval = null;
    }
  }

  private async pathExists(checkPath: string): Promise<boolean> {
    try {
      await promises.access(checkPath);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async processDirectory(directoryPath: string, currentMap: Map<string, object>): Promise<void> {
    try {
      // const isDirectory = (await promises.stat(directoryPath)).isDirectory();
      const entries = await promises.readdir(directoryPath);

      for (const entry of entries) {
        const entryPath = path.join(directoryPath, entry);
        const isSubfolder = (await promises.stat(entryPath)).isDirectory();

        if (isSubfolder) {
          continue;
        }

        if (path.extname(entry) === ".json") {
          const content = await promises.readFile(entryPath, "utf-8");
          const entryWithoutExtension = path.parse(entry).name;

          currentMap.set(entryWithoutExtension, JSON.parse(content));
        }
      }
    } catch (error) {
      throw error;
    }
  }

  private replacePlaceholders(string: string, placeholders: Record<string, string>): string {
    return string.replace(/\{(\w+)\}/g, (match, placeholder) => {
      return placeholders[placeholder] || match;
    });
  }
}