import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authorizeApp } from '../actions/authActions'
import ProductList from './ProductList'
import SearchBar from './SearchBar'


class Home extends Component {

    // componentWillMount() {
    //     this.props.authorizeApp()
    // }

    static navigationOptions = {
        header: null,
    }

    render() {
        console.log('props in home ', this.props)
        return (
            <View style = {{height: '100%'}}>
                <SearchBar
                    navigation = {this.props.navigation}
                />
                <ProductList
                    navigation = {this.props.navigation}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken
})

export default connect(mapStateToProps, { authorizeApp })(Home)
