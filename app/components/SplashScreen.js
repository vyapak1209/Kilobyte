import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { authorizeApp } from '../actions/authActions'

class SplashScreen extends Component {

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        this.props.authorizeApp()
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('HomePage')
        }, 500);

    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ee5861', flexDirection: 'column' }}>

                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', fontFamily: 'notoserif', alignSelf: 'center', textAlign: 'center' }}>
                    Kilobyte Assignment
                </Text>

            </View>
        )
    }
}

export default connect(null, { authorizeApp })(SplashScreen)