import {ADD_TO_CART} from '../actions/types'

export const addToCart = (item, qty) => dispatch => {

    console.log('add to cart ', item)

    dispatch({
        type: ADD_TO_CART,
        payload: item,
        qty: qty
    })

}


