const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const port = process.env.PORT || 3000

let app = express()

let partials = hbs.registerPartials(__dirname + '/views/partials')
let viewEngine = app.set('view engine', 'hbs')

app.use((request, response, next) => {
    let now = new Date().toString()
    let log = `${now}: ${request.method} ${request.url}`

    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err){
            console.log ('Unable to append to server.log')
        }
    })
    next();
})

/*let maintanance = app.use((request, response, next) => {
    response.render('maintanance.hbs')
})*/ 

let public = app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

let home = app.get('/', (request, response) => {
    //    response.send('<h1>Hello Express!</h1>')
    response.render('home.hbs', {
        pageTitle: 'arthurpieri.com',
        welcomeMessage: 'Bem vindo a ArthurPieri.com',
        likes: [
            'Cinema',
            'Videogames'
        ]
    })
})

let about = app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page'
    })
})

let bad = app.get('/bad',(request, response) => {
    response.send({
        errorMessage: 'Unable to fullfil your destiny',
        errorCode: '400'
    })
})


let portListen = app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
