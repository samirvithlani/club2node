var validator = require('validator')
var chalk = require('chalk')
var flag = validator.isEmail("samir_gmail.com")
console.log(flag)

console.log(chalk.underline.green("samir"))