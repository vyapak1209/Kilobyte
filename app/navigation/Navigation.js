import {createStackNavigator} from 'react-navigation'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'

export const RootStack = createStackNavigator({
    HomePage: {
        screen: Home,
    },
    
    CartPage: {
        screen: Cart,
    },

    CheckoutPage: {
        screen: Checkout,
    }
}, {
    initialRouteName: 'HomePage',
})