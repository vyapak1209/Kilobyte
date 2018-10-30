import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import CartItem from './CartItem'

class Cart extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cart',

            headerStyle: {
                backgroundColor: '#ee5861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
            headerLeft: (
                <TouchableOpacity style={{ padding: 5 }} onPress={navigation.getParam('goBack')}>
                    <Image
                        source={require('../assets/back.png')}
                        style={{ marginLeft: 10, height: 25, width: 25 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            ),
        }

    }

    componentDidMount() {
        this.props.navigation.setParams({ goBack: this.goBack.bind(this) });
    }

    goBack() {
        this.props.navigation.goBack();
    }

    checkout() {

        if (this.props.cartItems.length > 0) {
            let cartObj = {
                cartItems: [],
                totalPrice: 0,
                totalQty: 0,
                totalDiscount: 0,
            }

            this.props.cartItems.forEach((element) => {
                cartObj.cartItems.push(element.item)
            })

            cartObj.totalPrice = this.props.cartTotalPrice

            cartObj.totalQty = this.props.cartTotalQty

            console.log("cart object ", cartObj)
            this.props.navigation.navigate('CheckoutPage', { cartObj })
        }else{
            ToastAndroid.show('Add items to your cart!!', ToastAndroid.SHORT)
        }

    }

    render() {
        console.log("Cart items in cart ", this.props.cartItems)
        console.log("props in cart ", this.props)
        return (
            <View style={{ flex: 1 }}>
                <View>
                    {this.props.cartItems.length === 0 ?
                        <View style={{ alignItems: 'center', paddingTop: 100, backgroundColor: '#f3f3f3' }}>
                            <Text style={{ fontSize: 18 }}>
                                There are no products in your Cart!
                                </Text>
                        </View> : <View />}
                </View>
                <View style={{ flex: 3 }}>
                    <ScrollView
                        keyboardShouldPersistTaps={'handled'}
                        style={{ backgroundColor: '#f3f3f3' }}
                        ref='scrollview'>

                        {
                            (this.props.cartItems.length > 0) ? <View style={{
                                marginTop: 20,
                                marginLeft: 20,
                                marginRigth: 10,
                            }} >
                                <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>
                                    ITEMS ({this.props.cartTotalQty})
                                    </Text>
                            </View> : <View />
                        }

                        {
                            this.props.cartItems.map((cartItem) => {
                                return (
                                    <View>
                                        <CartItem
                                            cartItem={cartItem.item}
                                            title={cartItem.item.title}
                                            image={cartItem.item.image.imageUrl}
                                            quantity={cartItem.qty}
                                            price={cartItem.item.price.value}
                                        />
                                    </View>
                                )
                            })

                        }

                        <View style={{
                            marginTop: 20,
                            marginLeft: 20,
                            marginRigth: 10,
                        }} >
                            <Text style={{ fontSize: 13, color: '#697071', fontWeight: '200' }}>
                                PRICE DETAILS
                                </Text>
                        </View>

                        <View style={styles.totalView}>
                            <View style={{ flex: 1, justifyContent: 'space-around', padding: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <Text style={styles.totalText}> Sub Total : </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Text style={styles.totalText}> USD {this.props.cartTotalPrice} </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={styles.totalText}> Cart Discount : </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.totalText}> USD 0 </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{
                                            justifyContent: 'space-around',
                                            alignItems: 'flex-end',
                                            alignSelf: 'flex-end',
                                            marginTop: 5,
                                            fontFamily: 'GillSans',
                                            marginRight: 10,
                                            fontSize: 16,
                                            fontWeight: '400'
                                        }}> Total : </Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            justifyContent: 'space-around',
                                            alignItems: 'flex-end',
                                            alignSelf: 'flex-end',
                                            marginTop: 5,
                                            marginRight: 10,
                                            fontSize: 16,
                                            fontWeight: '400',
                                            color: '#000',
                                            fontWeight: 'bold'
                                        }}> USD {this.props.cartTotalPrice} </Text>
                                    </View>
                                </View>

                            </View>


                        </View>
                    </ScrollView>
                </View>

                <View style={{

                    backgroundColor: '#fff',
                    height: 70,
                    elevation: 10,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderTopColor: '#000',

                }}>

                    <TouchableOpacity
                        style={{
                            width: '40%',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}
                        onPress={() => this.refs.scrollview.scrollToEnd({ animated: true })}
                    >
                        <View >
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}
                                numberOfLines={1} >
                                USD {this.props.cartTotalPrice}
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#526CD0' }}>
                                VIEW DETAILS
                                </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.checkout()} activeOpacity={1} style={{
                        elevation: 2,
                        width: '60%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        backgroundColor: '#ee5861'
                    }}>

                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            CHECKOUT
                            </Text>

                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    checkoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    totalView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 150,
        backgroundColor: '#ffffff',
        elevation: 1,
        margin: 10,
        borderRadius: 5,
        borderColor: '#f1f1f1',
        borderWidth: 1

    },
    totalText: {
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 5,
        fontFamily: 'GillSans',
        marginRight: 10

    },
    cartLoaderStyle: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 300
    },

    container: {
        justifyContent: 'space-around',
        height: 60,
        flexDirection: 'row',
        padding: 10,
        elevation: 3


    },

    buttonStyle: {

        flex: 1,
        flexDirection: 'column',
        borderColor: 'red',
        borderWidth: 1.5,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
})

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    cartTotalPrice: state.cart.totalPrice,
    cartTotalQty: state.cart.totalQty,
})

export default connect(mapStateToProps, {})(Cart)