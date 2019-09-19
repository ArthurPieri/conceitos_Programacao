const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: "Coloque o endereço para descobrir a previsao do tempo",
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv

let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to finde that address') 
    }
    let lat = response.data.results[0].geometry.location.lat
    let lon = response.data.results[0].geometry.location.lng
    let apiKey = 'b20d28c40c7b2ac92a594c93f9dee631'
    let weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl)
}).then((response) => {
    let temperature = ((response.data.currently.temperature- 32)*(5/9)).toFixed(2)
    let apparentTemperature = ((response.data.currently.apparentTemperature - 32)*(5/9)).toFixed(2)
    console.log(`It's currently ${temperature} C. It feels like ${apparentTemperature} C.`)
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers')
    } else{
        console.log(e.message)
    }
})
