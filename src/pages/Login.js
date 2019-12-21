import React, { Component } from 'react';
import {
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
import Loader from '../components/Loader';
import renderTextInput from '../components/renderTextInput';

import loginStyles from '../styles/Login/loginStyles';


class Login extends Component {

    login = () => {
        Actions.signup();
    };

    

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
            <View style={loginStyles.container}>
                {(loginUser && loginUser.isLoading) && <Loader/>}
                <Logo />
                <Field
                    name="email"
                    placeholder="Email"
                    component={renderTextInput}
                />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={renderTextInput}
                />

                <TouchableOpacity
                    onPress={handleSubmit(this.onSubmit)}
                    style={loginStyles.button}
                >
                    <Text style={loginStyles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={loginStyles.signupTextCont}>
                    <Text style={loginStyles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={loginStyles.signupButton}> Signup</Text>
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