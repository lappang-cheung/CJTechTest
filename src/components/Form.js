import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class Form extends Component {

    render() {

        const {type} = this.props

        return (
            <View style={styles.container}>

                {
                    type === 'Signup' &&
                    <TextInput 
                        style={styles.inputBox}
                        placeholder="Name"
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        selectionColor="#ffffff"
                        onSubmitEditing={()=> this.email.focus()}
                        
                    />
                }

                <TextInput 
                    style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    selectionColor="#ffffff"
                    keyboardType="email-address"
                    ref={(input) => this.email = input}
                    onSubmitEditing={()=> this.password.focus()}
                />

                <TextInput 
                    style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    selectionColor="#ffffff"
                    ref={(input) => this.password = input}
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        {this.props.type}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,.3)',
        paddingVertical: 10,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,.3)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
        backgroundColor: '#1c313a'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
})

export default Form;