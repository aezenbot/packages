<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1183338541690933288/1224549770228535296/1712025319044.png?ex=661de5d8&is=660b70d8&hm=b24c29c50295ee0f423aa48ae5044041859cfece46e74e3eee33330a9f0f5672&" />
  
  # @aezen/storage
  Collection of **open-source** and **free-to-use** modules used for the development of **Aezen Bot**

  [![npm](https://img.shields.io/npm/v/@aezen/localization?color=crimson&logo=npm&style=flat-square&label=@aezen/localization)](https://www.npmjs.com/package/@aezen/localization)
  [![npm](https://img.shields.io/npm/v/@aezen/duration?color=crimson&logo=npm&style=flat-square&label=@aezen/duration)](https://www.npmjs.com/package/@aezen/duration)
  [![npm](https://img.shields.io/npm/v/@aezen/logger?color=crimson&logo=npm&style=flat-square&label=@aezen/logger)](https://www.npmjs.com/package/@aezen/logger)
  [![npm](https://img.shields.io/npm/v/@aezen/storage?color=crimson&logo=npm&style=flat-square&label=@aezen/storage)](https://www.npmjs.com/package/@aezen/storage)
</div>

## 🩵 Support the Project
If you find Aezen valuable. helpful, and enjoy using it, please consider supporting its development. Your contributions help us maintain, improve, and expand the features of the bot for the entire community.

- **☕ Buy Us a Coffee:** If you prefer a one-time contribution, you can also buy us a coffee. Every coffee supports the developers and fuels late-night coding sessions to bring you the best Aezen experience.
- **⭐ Star the Repository:** Show your love for Aezen by starring the GitHub repository. It helps us gain visibility and attract more users to the community.
- **🌊 Spread the Word:** Share Aezen with your friends, communities, or on social media. Your word-of-mouth recommendations help us grow and create a vibrant user community.

## 📍 Features
- Written with TypeScript.
- Compiled to ES Module.
- Lightweight.

## ✅ Usage of the Module
A simple storage utility class for storing and retrieving variables and objects. Here's how you can use the [storage](https://www.npmjs.com/package/@aezen/storage) module:

### Prerequisites
- **Knowledge:** You must know how to use JavaScript, or how to code in general. It is unlikely that you will get help from using this module by making a new issue.
- **Node Version:** You must use the latest verion of node.
- **ECMAScript:** This module uses ESM. Therefore in order to use this module, your application must use an ES Module.

### Installation
```bash
npm install @aezen/storage
```
```bash
yarn add @aezen/storage
```
```bash
pnpm add @aezen/storage
```

### Example.js
```js
// Import the Storage module
import Storage from '@aezen/storage';

// Set variables
Storage.set('name', 'John');
Storage.set('age', 30);

// Retrieve variables
const name = Storage.get('name');
const age = Storage.get('age');
console.log(name); // Output: John
console.log(age); // Output: 30

// Get all stored data
const allData = Storage.getAll();
console.log(allData); // Output: { name: 'John', age: 30 }

// Remove a variable
Storage.remove('age');
console.log(Storage.get('age')); // Output: undefined
```

### Shared storage
This module is a singleton module meaning any changes you make in your storage *should* sync with all other imports **if** done correctly. How can you do this? You need to run the module and imports of it in the same execution context. Separately running files that imports this module will create their own instance of the module instead of sharing with each other. Here's an example:

```js
// file1.ts
import storage from "@aezen/storage";
import file2 from "./file2";

storage.set("data1", "Oh hello!")
storage.set("data2", "Woah!")

console.log(storage)
console.log(file2())
```
```js
// file2.ts
import storage from "@aezen/storage";

export default function file2() {
  return storage
}
```
Here, we are trying to make these 2 files share the same instance of the storage module. Running ```file1.ts``` using ```tsx file1.ts``` will have the same output.

## 🤝 Contribute to the Project
We appreciate your interest in contributing to the development of Aezen! Whether you're reporting issues, submitting pull requests, or helping with documentation, your contributions make Aezen better for everyone. Here's how you can get involved:
- **🐛 Found a Bug or Have a Feature Request?** If you've encountered a bug or have a feature in mind, [existing issues](https://github.com/AezenBot/packages/issues) to see if it has already been reported. If not, feel free to [open a new issue](https://github.com/AezenBot/packages/issues/new) with as much detail as possible, including steps to reproduce the bug or a clear description of the new feature.
- **💯 Improving Documentaion.** Improvements to documentation are always welcome. If you find any typos, unclear instructions, or missing information, please submit a pull request to enhance the documentation.

## 🦊 Your Support Matters
Whether it's a financial contribution, a star on GitHub, or simply telling your friends about Aezen, every bit of support makes a significant impact. We're grateful for the fantastic community that surrounds Aezen, and we look forward to building and improving together.

Thank you for being a part of the Aezen journey!