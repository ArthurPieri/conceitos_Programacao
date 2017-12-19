const expect = require('expect')
const utils = require('./utils')

it('Should add two numbers', () => {
    let result = utils.add(33, 11)

    expect(result).toBe(44).toBeA('number')
});

it('Should asyncAdd two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number')
        done()
    })
})

it('Should square a number', () => {
    let x = 10
    let result = utils.square(x)

    expect(result).toBe(x*x).toBeA('number')
})

it('Should asyncSquare a number', (done) => {
    let x = 10
    utils.asyncSquare(x, (square) => {
        expect(square).toBe(x * x).toBeA('number')
        done()
    })
})

it('should expect some values', () => {
//    expect(12).toNotBe(11)
//    expect({name: 'arthur'}).toNotEqual({name: 'Arthur'})
//    expect([2,3,4]).toExclude(1)
    expect({
        name: 'Arthur',
        age: 25,
        location: 'Brasil'
    }).toInclude({
        age: 25
    })
})

it('Should verify first and Last names are set', () => {
    let user = {
        age: 25,
        location: 'Brasil'
    }

    let response = utils.setName(user, 'Arthur Pieri')

    expect(response).toInclude({
        firstName: 'Arthur',
        lastName: 'Pieri'    
    })
})