import storage from "@aezen/storage";
import file2 from "./file2";

storage.set("data1", "Oh hello!")
storage.set("data2", "Woah!")

console.log(storage)

console.log(file2())