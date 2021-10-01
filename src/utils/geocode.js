const request = require('request')
const geocode = (address , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibHVjaWZlcjcwNjkiLCJhIjoiY2t1M3EybDB6MnR0czMwcDhnNW90MGViNSJ9.SLFmDjKqunGU0YJ_DnKlUw&limit=1'

    request ({ url , json: true} , (error , { body }) => {
        if (error) {
            callback('Unable To Connect Location Service!' , undefined)
        } else if (body.features.length === 0) {
            callback('Unable To Find Location . Try Another Search !' , undefined)
        } else {
            callback(undefined , {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
