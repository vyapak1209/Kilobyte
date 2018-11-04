import {createStackNavigator} from 'react-navigation'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import SplashScreen from '../components/SplashScreen';
import MapPage from '../components/MapPage'


export const RootStack = createStackNavigator({
    HomePage: {
        screen: Home,
    },
    
    CartPage: {
        screen: Cart,
    },

    CheckoutPage: {
        screen: Checkout,
    },

    SplashPage: {
        screen: SplashScreen
    },

    MapPage: {
        screen: MapPage
    }
}, {
    initialRouteName: 'SplashPage',
})