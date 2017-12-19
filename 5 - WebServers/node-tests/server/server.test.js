const request = require('supertest')
const expect = require('expect')

let app = require('./server').app

it('Should return Hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not Found'
            })
        })
        .end(done)
})

it('Should return my name: Arthur', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Arthur',
                age: 25
            })
        })
        .end(done)
})