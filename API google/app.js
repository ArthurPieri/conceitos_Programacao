const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')

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

geocode.geocodeAddress(argv.address)