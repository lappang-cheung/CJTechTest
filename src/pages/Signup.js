import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

class Signup extends Component {

    login = () => {
        Actions.pop();
    };

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.login}>
                    <Text style={styles.signupButton}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default Signup;