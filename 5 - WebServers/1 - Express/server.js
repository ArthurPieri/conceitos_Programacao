const express = require('express')

let app = express()

let public = app.use(express.static(__dirname + '/public'))

let home = app.get('/', (request, response) => {
//    response.send('<h1>Hello Express!</h1>')
    response.send({
        name: 'Arthur',
        likes: [
            'Cinema',
            'Videogames'
        ]
    })
})

let about = app.get('/about', (request, response) => {
    response.send('About Page')
})

let bad = app.get('/bad',(request, response) => {
    response.send({
        errorMessage: 'Unable to fullfil your destiny',
        errorCode: '400'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
