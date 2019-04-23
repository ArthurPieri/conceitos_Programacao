const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Arthur',
        email: 'arthur@arthurpieri.com',
        password: 'MyPass123123'
    }).expect(201)
})