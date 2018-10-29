import React, { Component } from 'react'
import { searchProducts } from '../actions/searchActions'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native'
import ProductItem from './ProductItem'

class ProductList extends Component {


    render() {
        console.log('productList ', this.props.productList)
        console.log('props in productList ', this.props)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {(this.props.productList.length > 0) ?
                        <FlatList
                            data={this.props.productList.map((item) => {
                                return item
                            })}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                                return (
                                    <ProductItem
                                        product={item}
                                        navigation={this.props.navigation}
                                    />
                                )
                            }}
                        /> : <View />}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.search.productList,
    nextUrl: state.search.nextUrl,
})


export default connect(mapStateToProps, { searchProducts })(ProductList)