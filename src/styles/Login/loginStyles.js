import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
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

export default loginStyles;