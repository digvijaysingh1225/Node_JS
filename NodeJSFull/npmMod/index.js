const chalk = require('chalk');
const val = require("validator");

// console.log(chalk.blue("Hello World"));
// console.log(chalk.blue.underline("Hello World"));
// console.log(chalk.blue.bgBlack("Hello World"));

// console.log(chalk.green.inverse("success"));
// console.log(chalk.red.inverse("false"));


const res = val.isEmail("hello@hello.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); 