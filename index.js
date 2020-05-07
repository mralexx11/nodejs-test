const chalk = require('chalk')
const text = require('./data')

console.log(chalk.blue('Hello NodeJS!'))
console.log(chalk.green(text))
console.log(chalk.red(__dirname, __filename))
