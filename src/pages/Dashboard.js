import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {connect} from "react-redux";
import { ListItem } from 'react-native-elements';

import {logoutUser} from "../redux/actions/auth.action";
import {getActiveCampaigns} from "../redux/actions/campaign.action";

const styles = StyleSheet.create({
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


class Dashboard extends Component {

    componentDidMount = async () => {
       await this.campaignsActive()
    }
    
    logoutUser = () => {
        this.props.dispatch(logoutUser());
    }

    campaignsActive = () => {
        this.props.dispatch(getActiveCampaigns(this.props.auth.token))
    };

    render() {


        const {getUser:{userDetails}, campaigns:{campaigns}} = this.props;

        const name = (userDetails) ? userDetails.body.user.firstName : ""


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.textStyles}>Hello, {name}!</Text>
                    <TouchableOpacity style={styles.button} onPress={this.logoutUser}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList
                    data={campaigns}
                    renderItem={({ item }) => 
                        <ListItem 
                            leftAvatar={{ source: { uri: item.brand.logo } }}
                            title={`${item.brand.name}`}
                            subtitle={item.brand.website}
                            bottomDivider
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    };
};


mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser,
    auth: state.authReducer.authData,
    campaigns: state.campaignReducer.getActiveCampaigns
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);