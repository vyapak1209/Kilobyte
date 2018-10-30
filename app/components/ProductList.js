import React, { Component } from 'react'
import { searchProducts } from '../actions/searchActions'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, FlatList, ScrollView, ToastAndroid, Image, } from 'react-native'
import ProductItem from './ProductItem'


class ProductList extends Component {

    render() {
        console.log('productList ', this.props.productList)
        console.log('props in productList ', this.props)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle = {{flex: 1}}
                >
                    {(this.props.productList.length > 0) ?
                        <FlatList
                            data={this.props.productList.map((item) => {
                                return item
                            })}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <ProductItem
                                        product={item}
                                        navigation={this.props.navigation}
                                    />
                                )
                            }}
                            onEndReachedThreshold = {0.9}
                            onEndReached = {() => this.props.searchProducts(this.props.accessToken, null, this.props.nextUrl)}
                        /> : <View>
                            <View style={{ marginTop: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/search.png')}
                                    style={{ height: 100, width: 100, marginBottom: 10 }}
                                    resizeMode='contain'
                                />
                                <Text style={{ margin: 5 }}>Powered by Ebay</Text>
                                <Text style={{ margin: 5 }}>Search for products</Text>
                            </View>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken,
    productList: state.search.productList,
    nextUrl: state.search.nextUrl,
})


export default connect(mapStateToProps, { searchProducts })(ProductList)