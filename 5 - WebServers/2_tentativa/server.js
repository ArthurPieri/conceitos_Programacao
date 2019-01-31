const express = require('express')

let app = express()

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1> Its treason then')
    res.send({
        name: 'Arthur Pieri',
        likes: [
            'not life',
            'to die'
        ]
    })
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMsg: 'Deu ruim'
    })
})

app.listen(3000)