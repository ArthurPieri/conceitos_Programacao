const express = require('express')
const hbs = require('hbs')

let app = express()

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')
app.use(express.static(__dirname+'/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1> Its treason then')
    res.render('home.hbs', {
        pageTitle: 'Arthur Pieri',
        welcomeMsg: 'Well, Hello there'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMsg: 'Deu ruim'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})