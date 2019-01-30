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
let apiKey = fetchKEY()

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

let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey.key}&language=pt-BR`

axios.get(geocodeURL).then((response) => {
    console.log(response.data)
}).catch((e) => {
    console.log(e)
})