import { ADD_TO_CART, REMOVE_ITEM } from "../actions/types";

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

        case REMOVE_ITEM:
            
            let removeArr = []
            removeArr = state.cartItems.slice()
            console.log('removeArr ', removeArr)
            
            for(let i = 0; i < removeArr.length; i++){
                console.log("for ke anadar")
                if(removeArr[i].item.itemId === action.payload.itemId){
                    removeArr.splice(i, 1)
                    console.log("Index ", i)
                }
            }
            
            console.log('new removeArr ', removeArr)

            return{
                ...state,
                cartItems: removeArr,
                totalQty: state.totalQty - 1,
                totalPrice: state.totalPrice - (action.payload.price.value * 1) 
            }
        default: 
            return state
    }
}