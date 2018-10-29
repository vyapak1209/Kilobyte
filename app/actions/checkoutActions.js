import {DELIVER_AT} from '../actions/types'
import Geocoder from 'react-native-geocoding'

export const manageAddress = () => dispatch => {

    Geocoder.init('AIzaSyBJN8TNUQltSveXZrzHlhhfcw30fzhibBc')

    navigator.geolocation.getCurrentPosition((position) => {
        console.log('Position ', position)
        
        Geocoder.from(position.coords.latitude, position.coords.longitude)
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
                
                if(element.types[0] === 'premise' || element.types[0] === 'neighborhood' || element.types[0] === 'locality' || element.types[0] === 'political') {
                    addressObj.addressLine += element.long_name + ', '
                } 
                if(element.types[0] === 'administrative_area_level_2') {
                    addressObj.city = element.long_name
                } 
                if(element.types[0] === 'administrative_area_level_1') {
                    addressObj.state = element.long_name
                }
                if(element.types[0] === 'country') {
                    addressObj.country = element.long_name
                } 
                if(element.types[0] === 'route') {
                    addressObj.addressLine += element.long_name + ", "
                } 
                if(element.types[0] === 'postal_code') {
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


    })
    
    //navigator.geolocation.getCurrentPosition((position) => console.log('location', position), (error) => console.log(error))

}

