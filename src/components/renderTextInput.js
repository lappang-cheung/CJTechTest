import React from 'react';
import {View} from 'react-native';
import InputText from './InputText';

// Render text inputs
const renderTextInput = (field) => {
    const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
    return (
        <View>
          <InputText
            onChangeText={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            label={label}
            {...restInput} />
            {(touched && error) && <Text style={loginStyles.errorText}>{error}</Text>}
        </View>
    );
}

export default renderTextInput;