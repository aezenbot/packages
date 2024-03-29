import chalk from "chalk";

interface LoggerOptions {
  timestamp?: boolean;
  prefix?: string;
}

type LoggerLevels = "success" | "debug" | "info" | "log" | "warn" | "error" | "fatal";

const customColors = {
  // Main colors
  purple: chalk.hex("#9000ff"),

  // Light colors
  grayLight: chalk.hex("#c9c8c8"),
  cyanLight: chalk.hex("#8cf4ff"),
  magentaLight: chalk.hex("#c48cff"),
  greenLight: chalk.hex("#6bfaa0"),
  redLight: chalk.hex("#ff6161"),

  // Brighter colors
  greenBrighter: chalk.hex("#53f576"),
  blueBrighter: chalk.hex("#008cff"),
  redBrighter: chalk.hex("#fc2d2d"),
  redBrighter2: chalk.hex("#ff0000"),
  yellowBrighter: chalk.hex("#ffe600"),
  cyanBrighter: chalk.hex("#8ff4ff"),
  bgRedBrighter: chalk.bgHex("#ff0000")
}

const levels = {
  success: customColors.greenBrighter.bold,
  debug: chalk.magenta.bold,
  info: customColors.blueBrighter.bold,
  log: customColors.cyanBrighter.bold,
  warn: customColors.yellowBrighter.bold,
  error: customColors.redLight.bold,
  fatal: customColors.bgRedBrighter.bold,
};

function timestamp() {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  //@ts-ignore
  return new Date().toLocaleDateString("en-US", options);
}

function createInfo(options: LoggerOptions, level: LoggerLevels) {
  const date = options.timestamp === true ? customColors.grayLight(`[${timestamp()}]`) : null;
  const prefix = options.prefix ? chalk.bgGray.bold(`[ ${options.prefix} ]`) : null;
  const formattedLevel = levels[level](level.toUpperCase());

  return `${prefix ? `${prefix} ` : ""}${date ? `${date} ` : ""}${formattedLevel}`;
}

export default class Logger {
  levels: typeof levels;
  options: LoggerOptions;
  
  constructor(options: LoggerOptions = {}) {
    this.levels = levels;
    this.options = options;
  }

  log(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.log(`${createInfo(this.options, "log")}\n`, arg);
      } else {
        console.log(`${createInfo(this.options, "log")}  ${customColors.cyanLight(arg)}`);
      }
    });
  }

  info(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.info(`${createInfo(this.options, "info")}\n`, arg);
      } else {
        console.info(`${createInfo(this.options, "info")}  ${chalk.blue(arg)}`);
      }
    });
  }

  warn(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.warn(`${createInfo(this.options, "warn")}\n`, arg);
      } else {
        console.warn(`${createInfo(this.options, "warn")}  ${chalk.yellowBright(arg)}`);
      }
    });
  }

  success(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.log(`${createInfo(this.options, "success")}\n`, arg);
      } else {
        console.log(`${createInfo(this.options, "success")}  ${customColors.greenLight(arg)}`);
      }
    });
  }

  debug(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.debug(`${createInfo(this.options, "debug")}\n`, arg);
      } else {
        console.debug(`${createInfo(this.options, "debug")}  ${customColors.magentaLight(arg)}`);
      }
    });
  }

  error(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.log(`${createInfo(this.options, "error")}\n`, arg);
      } else {
        console.log(`${createInfo(this.options, "error")}  ${customColors.redLight(arg)}`);
      }
    });
  }

  fatal(...messages: any) {
    messages.forEach((arg: any) => {
      if (typeof arg !== "string") {
        console.log(`${createInfo(this.options, "fatal")}\n`, arg);
      } else {
        console.log(`${createInfo(this.options, "fatal")}  ${customColors.redBrighter2.underline(arg)}`);
      }
    });
  }
}