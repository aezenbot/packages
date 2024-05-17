import { GlobalStore, NamedStores } from "../../../packages/utilities/stores/src/index";

describe("GlobalStore", () => {
  let store: GlobalStore<number>;

  beforeEach(() => {
    store = new GlobalStore<number>();
  });

  test("set and get values", () => {
    store.set("key1", 42);
    expect(store.get("key1")).toBe(42);
  });

  test("update value", () => {
    store.set("key1", 42);
    store.set("key1", 43);
    expect(store.get("key1")).toBe(43);
  });

  test("delete value", () => {
    store.set("key1", 42);
    store.delete("key1");
    expect(store.get("key1")).toBeUndefined();
  });

  test("add and notify listener", () => {
    const listener = jest.fn();
    store.addListener("key1", listener);
    store.set("key1", 42);
    expect(listener).toHaveBeenCalledWith(42, undefined);
  });

  test("remove listener", () => {
    const listener = jest.fn();
    store.addListener("key1", listener);
    store.removeListener("key1", listener);
    store.set("key1", 42);
    expect(listener).not.toHaveBeenCalled();
  });

  test("handle non-existing key", () => {
    expect(store.get("key1")).toBeUndefined();
  });

  test("prevent empty key", () => {
    expect(() => store.set("", 42)).toThrowError("Key must be non-empty");
    expect(() => store.get("")).toThrowError("Key must be non-empty");
    expect(() => store.delete("")).toThrowError("Key must be non-empty");
  });
});

describe("NamedStores", () => {
  let namedStores: NamedStores;

  beforeEach(() => {
    namedStores = new NamedStores();
  });

  test("create and get store", () => {
    const store = namedStores.createStore<number>("numbers");
    expect(namedStores.getStore<number>("numbers")).toBe(store);
  });

  test("delete store", () => {
    namedStores.createStore<number>("numbers");
    namedStores.deleteStore("numbers");
    expect(() => namedStores.getStore<number>("numbers")).toThrowError("Store with name 'numbers' does not exist");
  });

  test("prevent empty name", () => {
    expect(() => namedStores.createStore<number>("")).toThrowError("Name must be non-empty");
    expect(() => namedStores.getStore<number>("")).toThrowError("Name must be non-empty");
    expect(() => namedStores.deleteStore("")).toThrowError("Name must be non-empty");
  });

  test("prevent duplicate store names", () => {
    namedStores.createStore<number>("numbers");
    expect(() => namedStores.createStore<number>("numbers")).toThrowError("Store with name 'numbers' already exists");
  });

  test("handle non-existing store", () => {
    expect(() => namedStores.getStore<number>("nonexistent")).toThrowError("Store with name 'nonexistent' does not exist");
  });

  describe("setting and getting data in named stores", () => {
    let store: GlobalStore<number>;

    beforeEach(() => {
      store = namedStores.createStore<number>("numbers");
    });

    test("set and get values in named store", () => {
      store.set("key1", 42);
      expect(store.get("key1")).toBe(42);
    });

    test("update value in named store", () => {
      store.set("key1", 42);
      store.set("key1", 43);
      expect(store.get("key1")).toBe(43);
    });

    test("delete value in named store", () => {
      store.set("key1", 42);
      store.delete("key1");
      expect(store.get("key1")).toBeUndefined();
    });

    test("add and notify listener in named store", () => {
      const listener = jest.fn();
      store.addListener("key1", listener);
      store.set("key1", 42);
      expect(listener).toHaveBeenCalledWith(42, undefined);
    });

    test("remove listener in named store", () => {
      const listener = jest.fn();
      store.addListener("key1", listener);
      store.removeListener("key1", listener);
      store.set("key1", 42);
      expect(listener).not.toHaveBeenCalled();
    });

    test("handle non-existing key in named store", () => {
      expect(store.get("key1")).toBeUndefined();
    });

    test("prevent empty key in named store", () => {
      expect(() => store.set("", 42)).toThrowError("Key must be non-empty");
      expect(() => store.get("")).toThrowError("Key must be non-empty");
      expect(() => store.delete("")).toThrowError("Key must be non-empty");
    });
  });
});