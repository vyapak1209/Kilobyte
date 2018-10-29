import { AUTH_APP } from "../actions/types";

const initialState = { accessToken: '' }

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_APP: 
            return{
                ...state, 
                accessToken: action.payload
            }
        default: 
            return state
    }
}