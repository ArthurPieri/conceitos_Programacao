const utils = require('./utils')

it('Should add two numbers', () => {
    let a = 33
    let b = 11
    let res = utils.add(a,b)

    if (res !== (a+b)) {
        throw new Error(`Expected ${a+b}, but got ${res} .`)
    }
})

it('Should square a number', () => {
    let number = 3
    let res = utils.square(number)

    if (res !== (number*number)){
        throw new Error(`Expected ${(number*number)}, but got ${res}`)
    }

})