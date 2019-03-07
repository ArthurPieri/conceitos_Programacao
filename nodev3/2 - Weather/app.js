const request = require('request')

const lang = 'lang=pt'
const dsKey = 'b20d28c40c7b2ac92a594c93f9dee631'
const units = 'units=si'
const geocodeKey = 'access_token=pk.eyJ1IjoiYXJ0aHVycGllcmkiLCJhIjoiY2pzeXJnbnk2MTV0dzQ1bjJjcmhzanFzbiJ9.TQkECATrs9ApgG-YCohv-A'
const geoLimit = 'limit=1'
let lat = '37.8267'
let lng = '-122.4233'

const dsUrl = `https://api.darksky.net/forecast/${dsKey}/${lat},${lng}?${units}&${lang}`

request({ url: dsUrl, json: true }, (error, response) => {
    if(error){
        console.log('Não foi possível conectar ao serviço de Previsão do tempo')
    } else if (response.body.error) {
        console.log('Não foi possível encontrar a localização')
    } else {
        const temperature = response.body.currently.temperature
        const precipProb = response.body.currently.precipProbability
        const dailySummary = response.body.daily.data[0].summary
        console.log(`${dailySummary} Está atualmente ${temperature} graus celsius. A chance de chuva é de ${precipProb}%\n`)    
    }
})

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?${geocodeKey}&${geoLimit}`

request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Não foi possível conectar ao serviço de localização')
    } else if (response.body.features.length === 0) {
        console.log('Localização não encontrada, tente novamente com outros termos')
    } else {
        let lng = response.body.features[0].center[0]
        let lat = response.body.features[0].center[1]
        console.log(`\n Longitude: ${lng}`)
        console.log(` Latitude: ${lat} \n`)    
    }    
})