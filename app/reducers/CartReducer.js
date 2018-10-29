import { ADD_TO_CART } from "../actions/types";

const initialState = { cartItems: [], totalPrice: 0, totalQty: 0  }

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
        let cartItemArray = []
        let obj = {item: action.payload, qty: action.qty}
        cartItemArray.push(obj) 
            return{
                ...state, 
                cartItems: state.cartItems.concat(cartItemArray),
                totalQty: state.totalQty + 1,
                totalPrice: state.totalPrice + (action.payload.price.value * action.qty) 
            }
        default: 
            return state
    }
}