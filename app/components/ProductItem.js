import React from 'react';
import {
    View, StyleSheet, Image, Text,
    TouchableHighlight, Dimensions, TouchableOpacity, Picker, Platform, ToastAndroid
} from 'react-native';

import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'


const win = Dimensions.get('window');

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }


    onAddToCart() {
        console.log('LOL')
        this.props.addToCart(this.props.product, 1)
        ToastAndroid.show('Item added to cart', ToastAndroid.SHORT);
    }

    render() {

        return (
            <View style={styles.pageStyle}>
                <Image
                    style={{ height: 100, width: 100 }}
                    resizeMode="contain"
                    source={{ uri: this.props.product.image.imageUrl }}
                />
                <View style={{
                    height: 100,
                    flexDirection: 'column',
                    width: '60%',
                    padding: 5,
                    justifyContent: 'space-around',
                    alignItems: 'flex-start'
                }}>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                        {this.props.product.title}
                    </Text>
                    <Text>
                        {this.props.product.price.value} {this.props.product.price.currency}
                    </Text>
                </View>
                <View style={{
                    height: 100,
                    flexDirection: 'column',
                    width: '15%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.onAddToCart()} activeOpacity={0.8} style={{ padding: 2 }}>
                        <Image
                            source={require('../assets/addToCart.png')}
                            style={{ height: 20, width: 20 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default connect(null, {addToCart})(ProductItem)

const styles = StyleSheet.create({

    pageStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 0,
        padding: 10,
    },
    productTitle: {
        height: 40,
        margin: 5,
        fontSize: 13.5,
        flex: 1,
        alignItems: 'center',
        fontFamily: 'GillSans',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    priceStyle: {
        color: 'grey',
        fontSize: 14,
        fontFamily: 'GillSans-semibold',

    },
    discountPriceStyle: {
        color: 'red',
        fontSize: 14,
        fontFamily: 'GillSans'
    },
    productImageStyle: {
        width: 150,
        height: 150,
        marginLeft: 10,
        marginRight: 10,

        padding: 5,


    },

    selectorText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '600'
    },

    quantityText: {
        fontSize: 12,
        color: '#000',
        fontWeight: '400'
    },

    selectorContainer: {
        marginTop: 12,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    selectorButton: {
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        borderColor: '#eeeeee',
        borderWidth: 2,
        backgroundColor: '#eeeeee',
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
})