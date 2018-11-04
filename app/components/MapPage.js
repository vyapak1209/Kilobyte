import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import { setMapPosition, manageAddress } from '../actions/checkoutActions'

class MapPage extends Component {


    constructor(props) {
        super(props)

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Location',

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

    goBack() {
        this.props.navigation.goBack();
    }

    componentDidMount() {
        this.props.navigation.setParams({ goBack: this.goBack.bind(this) });
        this.props.setMapPosition(null, null);
    }

    setAddress() {
        this.props.manageAddress(this.props.initialPosition.coords.latitude, this.props.initialPosition.coords.longitude)

        this.props.navigation.pop()
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: (this.props.initialPosition === null) ? 48 : this.props.initialPosition.coords.latitude,
                        longitude: (this.props.initialPosition === null) ? 32 : this.props.initialPosition.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                    <Marker draggable
                        coordinate={{
                            latitude: (this.props.initialPosition === null) ? 48 : this.props.initialPosition.coords.latitude,
                            longitude: (this.props.initialPosition === null) ? 32 : this.props.initialPosition.coords.longitude,
                        }}
                        onDragEnd={(e) => this.props.setMapPosition(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)}
                    />

                </MapView>

                <View style={{ width: 200, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', marginBottom: 10, textAlign: 'center' }}>
                        LONG PRESS ON MARKER TO START DRAGGING
                    </Text>

                </View>

                <View>
                    <TouchableOpacity onPress={() => this.setAddress()} activeOpacity={0.8} style={{ height: 40, width: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ee5861', borderRadius: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff', elevation: 2 }}>
                            CONTINUE
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    initialPosition: state.checkout.initialPosition
})

export default connect(mapStateToProps, { setMapPosition, manageAddress })(MapPage)

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});