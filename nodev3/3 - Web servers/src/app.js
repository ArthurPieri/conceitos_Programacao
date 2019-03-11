const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Seting express to app
const app = express()

// Define paths for Express config
const publicFolder = path.join(__dirname, '../public')
const viewsFolder = path.join(__dirname, '../templates/views')
const partialsFolder = path.join(__dirname, '../templates/partials')

// Handlebars (hbs) as the view engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsFolder)
hbs.registerPartials(partialsFolder)

// Setting the public folder to express
app.use(express.static(publicFolder))

// Home page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Arthur Pieri'
    })
})

// About page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About pagen',
        name: 'Arthur Pieri'
    })
})

// Help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Here is some help',
        name: 'Arthur Pieri',
        helpMsg: 'May our wives never become widows'
    })
})

// app.com/Weather - Getting an address as a query string
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }

    const location = req.query.address

    geocode(location, (error, {lat, lng, location} = {}) => {
        if(error){
            return res.send({ error })
        }

        forecast(lat, lng, (error, forecastData) => {
            if(error){
                return res.send({ error })
            }
        
            res.send({
                address: req.query.address,
                location,
                forecastData
            })
        })

    })
})

// Products page to learn how to use query strings
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

// 404 help page
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        name: 'Arthur',
        errorMsg: 'Help page not found'
    })
})

// 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        name: 'Arthur',
        errorMsg: 'Deu ruim irmão'
    })
})

// Starting app
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})