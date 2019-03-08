const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location) {
  console.log('Por favor informe um endereço')
} else {
  geocode(location, (error, {lat, lng, location}) => {
    if(error){
      return console.log(error)
    } 

    forecast(lat, lng, (error, forecastData) => {
      if(error){
        return console.log(error)
      }
  
      console.log(location)
      console.log(forecastData)
    })
  })
}