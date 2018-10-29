import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class CartItem extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 5,
                borderColor: '#f1f1f1',
                borderRadius: 5,
                borderWidth: 1,
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 5,
                elevation: 1,
                backgroundColor: '#fff'

            }}>

                <TouchableOpacity>

                    <Image
                        style={{ width: 100, height: 100, margin: 10 }}
                        source={{ uri: this.props.image }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>

                        <Text style={{ color: '#000', fontWeight: 'bold' }} numberOfLines={2} ellipsizeMode={'tail'}> {this.props.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 14,
                                textDecorationLine: 'none'
                            }}> USD {this.props.price} </Text>
                        </View>
                        <Text style={styles.rowStyle}> Quantity: {this.props.quantity} </Text>

                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, alignItems: 'flex-end', }}>
                    <View>
                        <TouchableOpacity>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../assets/delete.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    rowStyle: {
        color: 'grey',
        marginTop: 4
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 125,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1

    },
    rowContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderColor: 'red',
        borderWidth: 1
    }
})
