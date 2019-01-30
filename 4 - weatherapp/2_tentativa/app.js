/* 
Require declarations
 */
const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const darksky = require('./darksky/darksky.js')
/* 
Yargs commands setting
 */
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
/* 
Encoding the address recived from user input
 */
let encodedAddress = encodeURIComponent(argv.address)    
/* 
Calling GeocodeAddress function
 */
geocode.geocodeAddress(encodedAddress, (errorMessage, results) => {
// Geocode Error message
    if (errorMessage) {
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
        console.log(errorMessage)
        console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
    }
// Geocode Sucess
    else {
        console.log('\n-------------------------------------------\n')
        console.log('',results.address)
        darksky.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
    // Darksky error message
            if (errorMessage) {
                console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
                console.log(errorMessage)
                console.log('\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n')
            }
    // Darksky sucess
            else {
                console.log(` ${weatherResults.summary}`)
                console.log(` Agora está: ${weatherResults.temperature} ºC`)
                console.log(` Mas a sensação é de: ${weatherResults.apparentTemp} ºC`)
                console.log('\n-------------------------------------------\n')
            }    
        })
    }
})
