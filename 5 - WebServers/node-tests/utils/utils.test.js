const utils = require('./utils')

it('Should add two numbers', () => {
    let result = utils.add(33,11)

    if (result !== 44) {
        throw new Error(`Expected 44, but got ${result}`)
    }
});

it('Should square a number', () => {
    let x = 10
    let result = utils.square(x)

    if (result !== x * x){
        throw new Error(`Expected ${x*x} but got ${result}`)
    }
})
