import { DELIVER_AT } from "../actions/types";

const initialState = { address: [] }

export default function(state = initialState, action) {
    switch(action.type) {
        case DELIVER_AT:
            console.log(action)
            return{
                ...state,
                address: action.payload
            }
        default: 
            return state
    }
}