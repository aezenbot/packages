type Listener<T> = (newValue: T, oldValue: T) => void;

export class GlobalStore<T> {
  private data: Map<string, T> = new Map();
  private listeners: Map<string, Set<Listener<T>>> = new Map();
  
  public set(key: string, value: T): void {
    if (!key) throw new Error("Key must be non-empty");
    
    const oldValue = this.data.get(key);
    const exists = this.data.has(key);

    if (!exists || oldValue !== value) {
      this.data.set(key, value);

      if (!this.listeners.has(key)) {
        this.listeners.set(key, new Set());
      }

      this.notifyListeners(key, value, oldValue);
    }
  }

  public get(key: string): T | undefined {
    if (!key) throw new Error("Key must be non-empty");
    
    return this.data.get(key);
  }

  public delete(key: string): void {
    if (!key) throw new Error("Key must be non-empty");

    if (this.data.has(key)) {
      const oldValue = this.data.get(key);
      this.data.delete(key);
      this.notifyListeners(key, undefined as any, oldValue);
    }
  }

  public addListener(key: string, listener: Listener<T>): void {
    if (!key) throw new Error("Key must be non-empty");

    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }

    this.listeners.get(key)?.add(listener);
  }

  public removeListener(key: string, listener: Listener<T>): void {
    if (!key) throw new Error("Key must be non-empty");

    this.listeners.get(key)?.delete(listener);
  }

  private notifyListeners(key: string, newValue: T | undefined, oldValue: T | undefined): void {
    const listeners = this.listeners.get(key);
    
    if (listeners) {
      listeners.forEach((listener) => listener(newValue ?? (undefined as unknown as T), oldValue ?? (undefined as unknown as T)));
    }
  }
}

export class NamedStores {
  private stores: Map<string, GlobalStore<any>> = new Map();

  public createStore<T>(name: string): GlobalStore<T> {
    if (!name) throw new Error("Name must be non-empty");

    if (this.stores.has(name)) {
      throw new Error(`Store with name '${name}' already exists`);
    }

    const store = new GlobalStore<T>();
    this.stores.set(name, store);
    
    return store;
  }

  public getStore<T>(name: string): GlobalStore<T> {
    if (!name) throw new Error("Name must be non-empty");

    const store = this.stores.get(name);
    
    if (!store) {
      throw new Error(`Store with name '${name}' does not exist`);
    }
    
    return store as GlobalStore<T>;
  }

  public deleteStore(name: string): void {
    if (!name) throw new Error("Name must be non-empty");

    if (!this.stores.has(name)) {
      throw new Error(`Store with name '${name}' does not exist`);
    }

    this.stores.delete(name);
  }
}