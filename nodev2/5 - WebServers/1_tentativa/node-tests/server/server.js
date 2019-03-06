const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not Found',
        name: 'ToDo app v1.0'
    })
})

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Arthur',
        age: 25
    }, {
        name: 'Joao',
        age: 26
    }, {
        name: 'Gabriel',
        age: 24
    }])
})

app.listen(3000)

module.exports.app = app