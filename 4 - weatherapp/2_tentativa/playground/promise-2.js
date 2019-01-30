const request = require('request')
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

let geocodeAddress = (encodedAddress) => {
    return new Promise ((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey.key}&language=pt-BR`,
            json: true
        },(error, response, body) => {
            if (error) {
                reject(' Unable to connect to Google servers')
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject(' Unable to find that address')
            }
            else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })     
    })
}

geocodeAddress('70351702').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMsg) => {
    console.log(errorMsg)
})