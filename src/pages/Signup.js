import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';

import {createNewUser} from '../redux/actions/auth.action';

import Logo from '../components/Logo';
import InputText from '../components/InputText';
import Loader from '../components/Loader';

import signupStyles from '../styles/Signup/signupStyles';


class Signup extends Component {

    login = () => {
        Actions.pop();
    };

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                style={signupStyles.inputBox}
                onChangeText={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                label={label}
                {...restInput} />
                {(touched && error) && <Text style={signupStyles.errorText}>{error}</Text>}
            </View>
        );
    }

    createNewUser = (values) => {
        this.props.dispatch(createNewUser(values))
    }

    onSubmit = (values) => {
        this.createNewUser(values);
    }

    render() {

        const {handleSubmit, createUser} = this.props;

        return (
            <View style={signupStyles.container}>
                {createUser.isLoading && <Loader />}
                <Logo />
                <Field
                    name="name"
                    placeholder="Name"
                    component={this.renderTextInput}
                />
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
                    style={signupStyles.button}
                >
                    <Text style={signupStyles.buttonText}>
                        Signup
                    </Text>
                </TouchableOpacity>

                <View style={signupStyles.signupTextCont}>
                    <Text style={signupStyles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={signupStyles.signupButton}> Login</Text>
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
    createUser: state.authReducer.createUser
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: 'register',
        validate
    })
)(Signup);