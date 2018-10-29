import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import SearchReducer from './SearchReducer'
import CartReducer from './CartReducer'
import CheckoutReducer from './CheckoutReducer'

export default combineReducers({
    auth: AuthReducer,
    search: SearchReducer,
    cart: CartReducer,
    checkout: CheckoutReducer,
})
