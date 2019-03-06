// Just fancy console outpt
const chalk = require('chalk')
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.green.italic
const cInit = console.log(chalk.magenta.bold('\n -----------------------------------------------------\n'))
const cEnd = chalk.magenta.bold
const cMsg = chalk.inverse

module.exports = {
    error,
    warning,
    success,
    cInit,
    cEnd,
    cMsg
}