/* 
Require declarations
 */
const request = require('request')
const fs = require('fs')
/* 
Function fetchKEY that searchs for the .json file with the google maps api key
 */
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
/* 
Function geocodeAddress responsible for requesting the inputed address on google maps
 */
let geocodeAddress = (encodedAddress, callback) => {
        request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey.key}&language=pt-BR`,
        json: true
    },(error, response, body) => {
        if (error) {
            callback(' Unable to connect to Google servers')
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback(' Unable to find that address')
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    }) 
}
/* 
Exporting the functions
 */
module.exports = {
    geocodeAddress
}