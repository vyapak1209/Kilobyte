import { DELIVER_AT, SET_MAP_POSITION } from '../actions/types'
import Geocoder from 'react-native-geocoding'

export const setMapPosition = (lat, lang) => dispatch => {
    if (lat === null && lang === null) {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch({
                type: SET_MAP_POSITION,
                payload: position
            })
        })

    } else {
        let position = {
            coords: {
                latitude: lat,
                longitude: lang
            }
        }
        dispatch({
            type: SET_MAP_POSITION,
            payload: position
        })
    }
}

export const manageAddress = (lat, lang) => dispatch => {

    Geocoder.init('AIzaSyBJN8TNUQltSveXZrzHlhhfcw30fzhibBc')



    Geocoder.from(lat, lang)
        .then(json => {
            console.log(json)

            let addressObj = {
                addressLine: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
            }

            json.results[0].address_components.forEach((element) => {
                console.log("address component ", element.types[0])

                if (element.types[0] === 'premise' || element.types[0] === 'neighborhood' || element.types[0] === 'locality' || element.types[0] === 'political') {
                    addressObj.addressLine += element.long_name + ', '
                }
                if (element.types[0] === 'administrative_area_level_2') {
                    addressObj.city = element.long_name
                }
                if (element.types[0] === 'administrative_area_level_1') {
                    addressObj.state = element.long_name
                }
                if (element.types[0] === 'country') {
                    addressObj.country = element.long_name
                }
                if (element.types[0] === 'route') {
                    addressObj.addressLine += element.long_name + ", "
                }
                if (element.types[0] === 'postal_code') {
                    addressObj.pincode += element.long_name
                }

            })

            console.log("Address object ", addressObj)

            dispatch({
                type: DELIVER_AT,
                payload: addressObj
            })
        })
        .catch(error => console.warn(error));




    //navigator.geolocation.getCurrentPosition((position) => console.log('location', position), (error) => console.log(error))

}

