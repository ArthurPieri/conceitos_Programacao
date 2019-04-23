const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/users')

const userOne = {
    name: 'Jose',
    email: 'jose@jose.com',
    password: '123teste123'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})


test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Arthur',
        email: 'arthur@arthurpieri.com',
        password: 'MyPass123123'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login non existing user', async () => {
    await request(app).post('/users/login').send({
        email: 'arthurpieri@jose.com',
        password: 'blablabal123213'
    }).expect(400)
})