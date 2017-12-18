const express = require('express')
const handlebar = require('hbs')

let app = express()

let partials = hbs.registerPartials(__dirname + '/views/partials')
let viewEngine = app.set('view engine', 'hbs')
let public = app.use(express.static(__dirname + '/public'))

let home = app.get('/', (request, response) => {
    //    response.send('<h1>Hello Express!</h1>')
    response.render('home.hbs', {
        pageTitle: 'arthurpieri.com',
        welcomeMessage: 'Bem vindo a ArthurPieri.com',
        likes: [
            'Cinema',
            'Videogames'
        ],
        currentYear: new Date().getFullYear()
    })
})

let about = app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
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
