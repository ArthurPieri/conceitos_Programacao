const express = require('express')
const hbs = require('hbs')

let app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1> Its treason then')
    res.render('home.hbs', {
        pageTitle: 'Arthur Pieri',
        currentYear: new Date().getFullYear(),
        welcomeMsg: 'Well, Hello there'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
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