import { SEARCH_PRODUCTS } from "../actions/types";

const initialState = { productList: [], nextUrl: null }

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            if (action.lazyLoad) {
                return {
                    ...state,
                    productList: state.productList.concat(action.payload),
                    nextUrl: action.nextUrl,
                }
            } else {
                return {
                    ...state,
                    productList: action.payload,
                    nextUrl: action.nextUrl,
                }
            }
        default:
            return state
    }
}