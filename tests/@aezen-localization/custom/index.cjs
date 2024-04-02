const Localization = require("../../../packages/plugins/localization/dist/index.js");
const path = require("path");
const colors = require("colors");

const locale = new Localization({
  path: path.join(process.cwd(), "../../../", "tests/@aezen-localization/languages"),
  autoReload: false,
  autoReloadInterval: undefined
})

async function start() {
  await locale.init();

  console.log(colors.green(colors.bold("ESM")))
  console.log(chalk.magenta("getKey() — en"))
  console.log(chalk.gray(`- ${locale.getKey("en", "hello")}`))
  console.log(chalk.gray(`- ${locale.getKey("en", "replace", {
    name: "Aezen"
  })}`))
  
  console.log(chalk.magenta("getKey() — tl"))
  console.log(chalk.gray(`- ${locale.getKey("tl", "hello")}`))
  console.log(chalk.gray(`- ${locale.getKey("tl", "some.very.deep.path")}`))
  console.log(chalk.gray(`- ${locale.getKey("tl", "replace", {
    name: "Aezen"
  })}`))
  
  console.log(chalk.magenta("getRaw() — en"))
  console.log(locale.getRaw("en"))
  
  console.log(chalk.magenta("getRaw() — tl"))
  console.log(locale.getRaw("tl"))
  
  console.log(chalk.magenta("getLanguages()"))
  console.log(locale.getLanguages())
}

start()