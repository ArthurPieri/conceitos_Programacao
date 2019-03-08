const https = require('https')

const lang = 'lang=pt'
const dsKey = 'b20d28c40c7b2ac92a594c93f9dee631'
const units = 'units=si'

const dsUrl = `https://api.darksky.net/forecast/${dsKey}/40,-75?${units}&${lang}`

const request = https.request(dsUrl, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()