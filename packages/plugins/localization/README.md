<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1183338541690933288/1224549770228535296/1712025319044.png?ex=661de5d8&is=660b70d8&hm=b24c29c50295ee0f423aa48ae5044041859cfece46e74e3eee33330a9f0f5672&" />
  
  # @aezen/localization
  Collection of **open-source** and **free-to-use** modules used for the development of **Aezen Bot**
  
  [![npm](https://img.shields.io/npm/v/@aezen/localization?color=crimson&logo=npm&style=flat-square&label=@aezen/localization)](https://www.npmjs.com/package/@aezen/localization)
  [![npm](https://img.shields.io/npm/v/@aezen/duration?color=crimson&logo=npm&style=flat-square&label=@aezen/duration)](https://www.npmjs.com/package/@aezen/duration)
  [![npm](https://img.shields.io/npm/v/@aezen/logger?color=crimson&logo=npm&style=flat-square&label=@aezen/logger)](https://www.npmjs.com/package/@aezen/logger)
</div>

## 🩵 Support the Project
If you find Aezen valuable. helpful, and enjoy using it, please consider supporting its development. Your contributions help us maintain, improve, and expand the features of the bot for the entire community.

- **☕ Buy Us a Coffee:** If you prefer a one-time contribution, you can also buy us a coffee. Every coffee supports the developers and fuels late-night coding sessions to bring you the best Aezen experience.
- **⭐ Star the Repository:** Show your love for Aezen by starring the GitHub repository. It helps us gain visibility and attract more users to the community.
- **🌊 Spread the Word:** Share Aezen with your friends, communities, or on social media. Your word-of-mouth recommendations help us grow and create a vibrant user community.

## 📍 Features
- Written with JavaScript ES Module.
- Easy to use and understand.
- Quick setup.
- Lightweight and fast localization.

## ✅ Usage of the Module
This module is made and used to support localization of Discord bots and other application. Here's an example of how you can use the [localization](https://www.npmjs.com/package/@aezen/localization) module of Aezen.

### Prerequisites
- **Knowledge:** You must know how to use JavaScript, or how to code in general. It is unlikely that you will get help from using this module by making a new issue.
- **Node Version:** You must use the latest verion of node.
- **ECMAScript:** This module uses ESM. Therefore in order to use this module, your application must use an ES Module.

### Installation
```bash
npm install @aezen/localization
```
```bash
yarn add @aezen/localization
```
```bash
pnpm add @aezen/localization
```

### Folder Structure for the Languages
You can add more languages if you want. Only `.json` files are going to be recognized by the module.
```
languages/
├── en.json
├── tl.json
├── fr.json
├── ja.json
└── zh.json
```

### Example.js
```js
// Import the module
import Localization from "@aezen/localization";

// Create a new Localization class
const locale = new Localization(client, {
  /**
   * Where your languages are stored. You must specify the directory without the root directory.
   *
   * Other examples of path:
   * src/languages
   * src/bot/languages
   * modules/languages
   */
  path: "languages",
  autoReload: true, // If the module should auto reload the languages.
  autoReloadInterval: 3000 // The interval in milliseconds between reloading.
})

// IMPORTANT: This must be called, or else the
// languages won't load and the module won't work.
await locale.init();

// Now you can get translations! See the directory of the module for the rest of the functions
locale.getKey("en", "hello")
locale.getKey("en", "some.very.deep.path.object.to.the.translation")
```

### Example with placeholders
You must use `{}` if you wish to make a certain word act as a placeholder. To actually replace the placeholder in your JSON file, you can pass in a 3rd object parameter in the `getKey()` function.

#### ⚠️ The placeholder must be the same with your 3rd parameter. See example below.

```js
locale.getKey("en", "introduction", {
  name: "Aezen",
  developer: "Ark",
  language: "Discord.JS"
})
```
```json
{
  "introduction": "Hello there, my name is {name}. I am developed by {developer} using {language}."
}
```
```
Hello there, my name is Aezen. I am developed by Ark using Discord.JS.
```

## 🤝 Contribute to the Project
We appreciate your interest in contributing to the development of Aezen! Whether you're reporting issues, submitting pull requests, or helping with documentation, your contributions make Aezen better for everyone. Here's how you can get involved:
- **🐛 Found a Bug or Have a Feature Request?** If you've encountered a bug or have a feature in mind, [existing issues](https://github.com/AezenBot/packages/issues) to see if it has already been reported. If not, feel free to [open a new issue](https://github.com/AezenBot/packages/issues/new) with as much detail as possible, including steps to reproduce the bug or a clear description of the new feature.
- **💯 Improving Documentaion.** Improvements to documentation are always welcome. If you find any typos, unclear instructions, or missing information, please submit a pull request to enhance the documentation.

## 🦊 Your Support Matters
Whether it's a financial contribution, a star on GitHub, or simply telling your friends about Aezen, every bit of support makes a significant impact. We're grateful for the fantastic community that surrounds Aezen, and we look forward to building and improving together.

Thank you for being a part of the Aezen journey!