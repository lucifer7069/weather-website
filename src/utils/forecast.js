const request = require('request')
const forecast = (latitude , longitude , callback ) => {
    const url = 'http://api.weatherstack.com/current?access_key=85ad745878bf693ed1e278f45d7ee78a&query=' + latitude + ',' + longitude + '&units=m'
    request({ url , json: true} , (error , { body }) => {
        if (error) {
            callback('Unable To Connect Weather Service!' , undefined)
        } else if (body.error) {
            callback('Unable To Find Location!' , undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}



module.exports = forecast



