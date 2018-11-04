import { DELIVER_AT, SET_MAP_POSITION } from "../actions/types";

const initialState = { address: [], initialPosition: null }

export default function(state = initialState, action) {
    switch(action.type) {
        case DELIVER_AT:
            console.log(action)
            return{
                ...state,
                address: action.payload
            }
        case SET_MAP_POSITION: 
            return{
                ...state,
                initialPosition: action.payload
            }
        default: 
            return state
    }
}