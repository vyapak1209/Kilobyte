import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import { searchProducts } from '../actions/searchActions'
import { connect } from 'react-redux'


class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }

    }



    render() {
        return (

            <View style={{
                width: '100%',
                height: 65,
                elevation: 2,
                backgroundColor: '#ee5861',
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <StatusBar
                    backgroundColor="#aa3939"
                    barStyle="light-content"
                />
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({
                                query: text
                            })
                        }}
                        value={this.state.query}
                        onSubmitEditing={() => this.props.searchProducts(this.props.accessToken, this.state.query)}
                        placeholder='Search Items'
                    />
                    <View style={{
                        width: '10%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 2
                    }}>
                        <TouchableOpacity activeOpacity = {0.8} onPress = {() => this.props.navigation.navigate('CartPage')}>
                            <Image
                                source={require('../assets/cart.png')}
                                style={{ height: 25, width: 25 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        // borderColor:'#aa3939',
        borderRadius: 7,
        padding: 10,
        color: 'gray',
        marginRight: 2,
    }
})

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken
})

export default connect(mapStateToProps, { searchProducts })(SearchBar)