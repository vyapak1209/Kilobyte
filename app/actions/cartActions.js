import {ADD_TO_CART, REMOVE_ITEM} from '../actions/types'

export const addToCart = (item, qty) => dispatch => {

    console.log('add to cart ', item)

    dispatch({
        type: ADD_TO_CART,
        payload: item,
        qty: qty
    })

}

export const removeItem = (item) => dispatch => {
    console.log("Item to remove ", item)

    dispatch({
        type: REMOVE_ITEM,
        payload: item,
    })
}


