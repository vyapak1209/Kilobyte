import { B64CREDENTIALS, AUTH_TOKEN, AUTH_APP } from './types'
import {AsyncStorage} from 'react-native'


export const authorizeApp = () => dispatch => {
    console.log(B64CREDENTIALS)

    fetch('https://api.ebay.com/identity/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': B64CREDENTIALS
        },
        body: 'grant_type=client_credentials&redirect_uri=#&scope=https://api.ebay.com/oauth/api_scope'
    }).then(resp => resp.json())
    .then(response => {
        console.log('response ', response)
        dispatch({
            type: AUTH_APP,
            payload: response.access_token
        })
    }).catch((err) => {
        console.log(err)
    })
}

