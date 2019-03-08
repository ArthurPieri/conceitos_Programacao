const path = require('path')
const express = require('express')

const app = express()

const publicFolder = path.join(__dirname, '../public')

// app.com
app.use(express.static(publicFolder))

// app.com/help
// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Arthur',
//         age: 26
//     })
// })

// // app.com/about
// app.get('/about', (req, res) => {
//     res.send('<h1>About page</h1>')
// })

// app.com/Weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Chuvendo',
        location: 'Casa do baralho'
    })
})

// Starting app
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})