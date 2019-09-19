const request = require('request')

// Variables
const geocodeKey = 'access_token=pk.eyJ1IjoiYXJ0aHVycGllcmkiLCJhIjoiY2pzeXJnbnk2MTV0dzQ1bjJjcmhzanFzbiJ9.TQkECATrs9ApgG-YCohv-A'
const geoLimit = 'limit=1'

// Functions
const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?${geocodeKey}&${geoLimit}`
    request({url: geocodeUrl, json: true}, (error, {body}) => {
        if(error){
            callback('Não foi possível conectar ao servidor de localização!', undefined)
        } else if (body.features.length === 0) {
            callback('Não foi possível encontrar a localização', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lng: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// Exports
module.exports = geocode