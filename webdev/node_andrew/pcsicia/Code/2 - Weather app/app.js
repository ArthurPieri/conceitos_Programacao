const request = require('request')

try{
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Brasilia',
        json: true
    }, (error, response, body) => {
        console.log(body)
    })
} catch (e) {
    console.log('Deu ruim')
}
