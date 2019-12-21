import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm, reset} from 'redux-form';

import {loginUser} from '../redux/actions/auth.action';

import Logo from '../components/Logo';
import InputText from '../components/InputText';
import Loader from '../components/Loader';

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
    },
    errorText: {
        color: '#ffffff',
        fontSize: 14,
        paddingHorizontal: 16,
        paddingBottom: 8
    },
    inputBox: {
        height: 40
    },
});


class Login extends Component {

    login = () => {
        Actions.signup();
    };

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                style={styles.inputBox}
                onChangeText={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                label={label}
                {...restInput} />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    loginUser = async (values) => {
        
        await this.props.dispatch(loginUser(values));

        if(this.props.loginUser.isSuccess !== true){
            Alert.alert(
                'Warning',
                'Invalid email or password',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        };
    
    };
        

    onSubmit = (values, dispatch) => {
        this.loginUser(values);
        dispatch(reset('login'));
    };

    render() {

        const {handleSubmit, loginUser} = this.props;

        return (
            <View style={styles.container}>
                {(loginUser && loginUser.isLoading) && <Loader/>}
                <Logo />
                <Field
                    name="email"
                    placeholder="Email"
                    component={this.renderTextInput}
                />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={this.renderTextInput}
                />

                <TouchableOpacity
                    onPress={handleSubmit(this.onSubmit)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

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

const validate = (values) => {
    const errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
};

const mapStateToProps = (state) => ({
    loginUser: state.authReducer.loginUser
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: 'login',
        validate
    })
)(Login);