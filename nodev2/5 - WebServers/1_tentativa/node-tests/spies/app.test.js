const expect = require('expect')
const rewire = require('rewire')

let app = rewire('./app')

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy()
        spy('Arthur', 25)
        expect(spy).toHaveBeenCalledWith('Arthur', 25)
    })
    it('Should call saveUser with user object', () => {
        let email = 'arthur@arthurpieri.com'
        let password = '123456'

        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })
})