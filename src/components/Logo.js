import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    styles={styles.loginLogo}
                    source={require('../images/logo.png')}
                />
                <Text style={styles.logoText}>Clout Jam</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    loginLogo: {
        width: 40,
        height: 70
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255, 255,255, 0.7)'
    }
})

export default Logo;