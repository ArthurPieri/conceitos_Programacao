const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: "Coloque o endereço para descobrir a previsao do tempo",
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv

//console.log(argv)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`,
    json: true
}, (error, response, body) => {
    console.log('Address: ' + body.results[0].formatted_address)
    console.log('Latitude: ', body.results[0].geometry.location.lat)
    console.log('Longitude: ', body.results[0].geometry.location.lng)
})