const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000
/* Starting express */
let app = express()

/* Starting HBS Partials */
hbs.registerPartials(__dirname + '/views/partials')

/* Setting expresse to use hbs */
app.set('view engine', 'hbs')

/* Starting the express middleware to log thins on console and the server.log file */
app.use((req, res, next) => {
    let now = new Date().toString()
    let log = `${now}: ${req.method} ${req.url}`

    console.log(log)
    fs.appendFileSync('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable')
        }
    })
    next()
})

/* Expresse middleware to maintenance mode comment if not needed */
app.use((req, res, next) => [
    res.render('maintenance.hbs')
])

/* Using expresse to distribute the html files on /public folder */
app.use(express.static(__dirname+'/public'))

/* Creating, using hbs helpers, the getCurrentYear function to be used on the hbs files */
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

/* Another function to set everything to uppercase */
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

/* Creating the home page */
app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1> Its treason then')
    res.render('home.hbs', {
        pageTitle: 'Arthur Pieri',
        welcomeMsg: 'Well, Hello there'
    })
})

/* Creating the about page */
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    })
})

/* Creating the bad page */
app.get('/bad', (req, res) => {
    res.send({
        errorMsg: 'Deu ruim'
    })
})

/* Starting app on port 3000 */
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})