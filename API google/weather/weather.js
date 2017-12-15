const request = require('request')

let getWeather = (lat, lon, callback) => {
    let apiKey = 'b20d28c40c7b2ac92a594c93f9dee631'
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: ((body.currently.temperature - 32)*(5/9)).toFixed(2),
                apparentTemperature: ((body.currently.apparentTemperature - 32)*(5/9))                
            })
        } else {
            callback('Unable to fetch weather.')
        }
    }
)}

module.exports.getWeather = getWeather