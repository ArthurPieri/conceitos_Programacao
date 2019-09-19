const request = require('request')

// Variables
const lang = 'lang=pt'
const dsKey = 'b20d28c40c7b2ac92a594c93f9dee631'
const units = 'units=si'

// Function
const forecast = (lat, lng, callback) => {
    // dsUrl to use the Dark Sky api url
    const dsUrl = `https://api.darksky.net/forecast/${dsKey}/${lat},${lng}?${units}&${lang}`

    request({ url: dsUrl, json: true }, (error, {body}) => {
        if(error){
            callback('Não foi possível conectar ao serviço de Previsão do tempo', undefined)
        } else if (body.error) {
            callback('Não foi possível encontrar a localização', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + `Atualmente está ${body.currently.temperature} graus celsius e com ${body.currently.precipProbability}% de chance de chover`)
        }
    })
}

// Export
module.exports = forecast