import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Button
} from 'react-native';
import {connect} from "react-redux";
import { ListItem } from 'react-native-elements';

import {logoutUser} from "../redux/actions/auth.action";
import {
    getActiveCampaigns, 
    getOpportunityCampaigns, 
    getNegotationCampaigns
} from "../redux/actions/campaign.action";

import Loader from '../components/Loader';

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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    campaignButtons: {
        textAlign:'center'
    },
    
    campaignButtonSelected:{
        backgroundColor: '#6A0DAD'
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

    state = {
        campaignData: {},
        buttonSelected: 1
    }

    componentDidMount = async () => {
       await this.campaignsActive(this.props.auth.token)
    }
    
    logoutUser = () => {
        this.props.dispatch(logoutUser());
    }

    campaignsActive = async (token) => {
        await this.props.dispatch(getActiveCampaigns(token));
        this.loadCampaignData(this.props.activeCampaigns)
    };

    campaignsOpportunity = async (token) => {
        await this.props.dispatch(getOpportunityCampaigns(token));
        this.loadCampaignData(this.props.opportunityCampaigns)
    };

    campaignsNegotation = async (token) => {
        await this.props.dispatch(getNegotationCampaigns(token));
        this.loadCampaignData(this.props.negotationCampaigns)
    };

    loadCampaignData = (data) => {
        this.setState({
            campaignData: data
        });
    };

    render() {


        const {getUser:{userDetails}, auth: {token}} = this.props;
        const {campaignData, buttonSelected} = this.state;

        const name = (userDetails) ? userDetails.body.user.firstName : ""

        console.log(campaignData.loading);

        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.topContainer}>
                    <Text style={styles.textStyles}>Hello, {name}!</Text>
                    <TouchableOpacity style={styles.button} onPress={this.logoutUser}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                
                {campaignData.loading !== false && <Loader/>}
                {campaignData.loading === false &&
                    <>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={buttonSelected == 1 ? styles.campaignButtonSelected : styles.campaignButtons} 
                                title="Active"
                                onPress={() => {this.campaignsActive(token), this.setState({buttonSelected: 1})}}
                            />
                            <Button 
                                style={styles.campaignButtons}
                                title="Opportunity"
                                onPress={() => {this.campaignsOpportunity(token), this.setState({buttonSelected: 2})}}
                            />
                            <Button
                                style={styles.campaignButtons} 
                                title="Negotation"
                                onPress={() => {this.campaignsNegotation(token), this.setState({buttonSelected: 3})}}
                            />
                        </View>
                        <FlatList
                            data={campaignData.campaigns}
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
                    </>
                }
            </SafeAreaView>
        );
    };
};


mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser,
    auth: state.authReducer.authData,
    activeCampaigns: state.campaignReducer.getActiveCampaigns,
    opportunityCampaigns: state.campaignReducer.getOpportunityCampaigns,
    negotationCampaigns: state.campaignReducer.getNegotationCampaigns
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);