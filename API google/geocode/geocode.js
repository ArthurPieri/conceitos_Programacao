const request = require('request')

let geocodeAddress = (address) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error){
            console.log('Impossivel conectar ao servidor do google')
        } else if (body.status === 'ZERO_RESULTS'){
            console.log ('Endereco nao encontrado')
        } else if (body.status === 'OK'){
        console.log('Address: ' + body.results[0].formatted_address)
        console.log('Latitude: ', body.results[0].geometry.location.lat)
        console.log('Longitude: ', body.results[0].geometry.location.lng)
        }
    })
}



module.exports.geocodeAddress = geocodeAddress