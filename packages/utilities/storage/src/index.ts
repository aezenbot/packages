/**
 * A simple storage utility class for storing and retrieving variables and objects.
 */
export default class Storage {
  // Private static data object to store key-value pairs
  private static data: { [key: string]: any } = {};

  /**
   * Set a value in the storage with the specified key.
   * @param key The key to associate the value with.
   * @param value The value to store.
   */
  static set(key: string, value: any): void {
    this.data[key] = value;
  }

  /**
   * Get the value associated with the specified key from the storage.
   * @param key The key to retrieve the value for.
   * @returns The value associated with the key, or undefined if the key doesn't exist.
   */
  static get(key: string): any {
    return this.data[key];
  }

  /**
   * Get all key-value pairs stored in the storage.
   * @returns A shallow copy of the data object containing all key-value pairs.
   */
  static getAll(): { [key: string]: any } {
    return { ...this.data };
  }

  /**
   * Remove the value associated with the specified key from the storage.
   * @param key The key to remove along with its associated value.
   */
  static remove(key: string): void {
    delete this.data[key];
  }
}