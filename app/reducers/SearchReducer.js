import { SEARCH_PRODUCTS } from "../actions/types";

const initialState = { productList: [], nextUrl: null }

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_PRODUCTS: 
            return{
                ...state, 
                productList: action.payload,
                nextUrl: action.nextUrl,
            }
        default: 
            return state
    }
}