import {StyleSheet} from 'react-native';


const dashboardStyles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
        flexGrow: 1
    },
    topContainer: {
        flexGrow: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    campaignButtons: {
        backgroundColor: '#ffffff',
        flexGrow: 1,
        marginVertical: 10,
        paddingVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 1
    },
    campaignButtonText: {
        textAlign:'center',
        fontSize: 16,
        fontWeight:'500',
    },  
    campaignButtonSelected:{
        backgroundColor: '#6A0DAD',
        flexGrow: 1,
        marginVertical: 10,
        paddingVertical: 10,
    },
    textStyles: {
        color: "#ffffff",
        paddingLeft: 10,
        paddingTop: 20
    },
    textStyle: {
        color: "#fff",
        fontSize: 18,
    },
    button: {
        width:130,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize:12,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});

export default dashboardStyles;