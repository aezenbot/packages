/**
 * A singleton storage utility class for storing and retrieving variables and objects.
 */
class Storage {
  // Private data object to store key-value pairs
  private data: { [key: string]: any } = {};

  // Private static instance to hold the singleton instance of the Storage class
  private static instance: Storage;

  // Private constructor to prevent external instantiation
  private constructor() {}

  /**
   * Get the singleton instance of the Storage class.
   * @returns The singleton instance of the Storage class.
   */
  static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  /**
   * Set a value in the storage with the specified key.
   * @param key The key to associate the value with.
   * @param value The value to store.
   */
  set(key: string, value: any): void {
    this.data[key] = value;
  }

  /**
   * Get the value associated with the specified key from the storage.
   * @param key The key to retrieve the value for.
   * @returns The value associated with the key, or undefined if the key doesn't exist.
   */
  get(key: string): any {
    return this.data[key];
  }

  /**
   * Get all key-value pairs stored in the storage.
   * @returns A shallow copy of the data object containing all key-value pairs.
   */
  getAll(): { [key: string]: any } {
    return { ...this.data };
  }

  /**
   * Remove the value associated with the specified key from the storage.
   * @param key The key to remove along with its associated value.
   */
  remove(key: string): void {
    delete this.data[key];
  }
}

// Export the singleton instance of the Storage class
export default Storage.getInstance();