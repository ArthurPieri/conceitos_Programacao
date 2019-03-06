/* 
Require declarations
 */
const request = require('request')
const fs = require('fs')
const moment = require('moment')
/* 
Function fetchKEY that searchs for the .json file with the google maps api key
 */
let fetchKEY = () => {
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
let apiKey = fetchKEY()
/* 
Function getWeather responsible for requesting the inputed address temperature on Darksky
 */
let getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/${apiKey.key}/${lat},${lng}?lang=pt`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback (undefined, {
                temperature: ((body.currently.temperature-32)*(5/9)).toFixed(2),
                apparentTemp: ((body.currently.apparentTemperature-32)*(5/9)).toFixed(2),
                summary: body.currently.summary,
            })
        } else {
            callback(' Deu ruim')
        }
    })    
}

module.exports = {
    getWeather
}