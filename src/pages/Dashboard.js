import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";

import {logoutUser} from "../redux/actions/auth.action";
import {getActiveCampaigns} from "../redux/actions/campaign.action";

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
        flexGrow: 1
    },
    textStyles: {
        color: "#ffffff"
    },
    textStyle: {
        color: "#fff",
        fontSize: 18
    },
    button: {
      width:130,
      backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
});


class Dashboard extends Component {

    
    logoutUser = () => {
        this.props.dispatch(logoutUser());
    }

    campaignsActive = () => {
        const token = { "token": `Bearer ${this.props.auth.token}`};
        this.props.dispatch(getActiveCampaigns(this.props.auth.token))
    };

    render() {


        const {getUser, campaigns} = this.props;
        console.log(campaigns)
        // Won't like destructure in the props
        const name = (getUser && getUser.userDetails) ? getUser.userDetails.body.user.firstName : ""


        return (
            <SafeAreaView style={styles.container}>
            <Text style={styles.textStyles}>Hello, {name}!</Text>
                <TouchableOpacity style={styles.button} onPress={this.campaignsActive}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };
};


mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser,
    auth: state.authReducer.authData,
    campaigns: state.campaignReducer
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);