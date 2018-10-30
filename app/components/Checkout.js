import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import { manageAddress } from '../actions/checkoutActions'
import { connect } from 'react-redux'

const win = Dimensions.get('window');

class Checkout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            city: "",
            pinCode: "",
            country: "",
            state: "",
        }

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Checkout',

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

    onContinue() {
        console.log("Address state ", this.state)
        if (this.state.firstName === '' ||
            this.state.picode === '' ||
            this.state.lastName === '' ||
            this.state.city === '' ||
            this.state.state === '' ||
            this.state.country === '' ||
            this.state.phone === '' ||
            this.state.address === '') {
            console.log("Kuch Khali hai")
        }
        else {
            console.log("Chalie shuru karte hai")

            let detailObj = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phone: this.state.phone,
                city: this.state.city,
                pinCode: this.state.pinCode,
                country: this.state.country,
                state: this.state.state,
            }

            let checkoutObject = {
                cart: this.props.navigation.getParam('cartObj'),
                details: detailObj
            }

            console.log("Checkout Object ", checkoutObject)

        }
    }

    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    render() {
        console.log('Address in checkout ', this.props.address)
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}>

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'} style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>
                        DELIVERY DETAILS
                </Text>
                    <View style={styles.container}>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={{...styles.textFieldStyle, width: '50%'}}
                                onChangeText={(text) => this.setState({
                                    firstName: text
                                })}
                                autoCapitalize='none'
                                underlineColorAndroid='transparent'
                                placeholder="Firstname"
                                value={this.state.firstName}

                            />
                            <TextInput
                                style={{...styles.textFieldStyle, width: '50%'}}
                                onChangeText={(text) => this.setState({
                                    lastName: text
                                })}
                                autoCapitalize='none'
                                underlineColorAndroid='transparent'
                                placeholder="Lastname"
                                value={this.state.lastName}

                            />
                        </View>

                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                address: text
                            })}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            placeholder="Address"
                            value={(this.props.address.length === 0) ? this.state.address : this.props.address.addressLine}

                        />

                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                city: text
                            })}
                            autoCapitalize='none'
                            placeholder="City"
                            value={(this.props.address.length === 0) ? this.state.city : this.props.address.city}

                        />

                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                state: text
                            })}
                            autoCapitalize='none'
                            placeholder="State"
                            value={this.state.state}
                            value={(this.props.address.length === 0) ? this.state.state : this.props.address.state}
                        />

                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                country: text
                            })}
                            autoCapitalize='none'
                            placeholder="Country"
                            value={(this.props.address.length === 0) ? this.state.country : this.props.address.country}
                        />

                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                pinCode: text
                            })}
                            autoCapitalize='none'
                            placeholder="Pincode"
                            value={(this.props.address.length === 0) ? this.state.pinCode : this.props.address.pincode}
                        />
                        <TextInput
                            style={styles.textFieldStyle}
                            onChangeText={(text) => this.setState({
                                phone: text
                            })}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            placeholder="Contact Number"
                            value={this.state.phone}
                        />

                    </View>

                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.manageAddress()}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#526CD0', marginBottom: 10 }}>
                                GET CURRENT LOCATION
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.onContinue()} activeOpacity={0.8} style={{ height: 40, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ee5861', borderRadius: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff', elevation: 2 }}>
                                CONTINUE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }
}


const mapStateToProps = state => ({
    address: state.checkout.address,
})

export default connect(mapStateToProps, { manageAddress })(Checkout)

const styles = StyleSheet.create({
    textFieldStyle: {
        height: 40,
        margin: 5,
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 50,
        width: win.width - 200,
        margin: 15,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonTextSignup: {
        color: 'red'
    },
    buttonSignup: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 50,
        width: 300,
        margin: 15,
        marginTop: 10
    },
    navBar: {
        backgroundColor: 'white',
    },
    statusBar: {
        backgroundColor: 'white',
    },
    NavigationTitle: {
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        flexDirection: 'row',
        fontFamily: 'GillSans',
    },
    menuImage: {
        height: 26,
        width: 26,
        marginLeft: 5
    },
    stateStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 34,
        margin: 10,
        width: win.width - 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderBottomWidth: 1
    },
    countryStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 34,
        margin: 10,
        width: win.width - 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderBottomWidth: 1
    }
})