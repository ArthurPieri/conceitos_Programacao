const yargs = require('yargs')
const axios = require('axios')
const fs = require('fs')

let fetchKEY = () => {
    try {
     let keyString = fs.readFileSync('./api_keys/mapsapikey.json')
        return JSON.parse(keyString)
    } catch (e) {
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
        console.log('Deu ruim na chave da api')
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
        return []
    }
}
let apiKeyG = fetchKEY()

let fetchKEYW = () => {
    try {
     let keyString = fs.readFileSync('./api_keys/darkskykey.json')
        return JSON.parse(keyString)
    } catch (e) {
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
        console.log('Deu ruim na chave da api')
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
        return []
    }
}
let apiKeyW = fetchKEYW()


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv

let encodedAddress = encodeURIComponent(argv.address)    

let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKeyG.key}&language=pt-BR`

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error(' Unable to find that address')
    }
    let lat = response.data.results[0].geometry.location.lat
    let lng = response.data.results[0].geometry.location.lng
    let weatherURL = `https://api.darksky.net/forecast/${apiKeyW.key}/${lat},${lng}?lang=pt`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherURL)
}).then((response) => {
    let temperature = ((response.data.currently.temperature-32)*(5/9)).toFixed(2)
    let apparentTemperature = ((response.data.currently.apparentTemperature-32)*(5/9)).toFixed(2)
    console.log(`Its currently: ${temperature} ºC, But it feels like ${apparentTemperature}ºC`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND' ){
        console.log(' Unable to connect to API servers')
    } else {
        console.log(e.message)
    }
})