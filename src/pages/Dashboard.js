import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
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

import dashboardStyles from '../styles/Dashboard/dashboardStyles'


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


        return (
            <SafeAreaView style={dashboardStyles.container}>

                <View style={dashboardStyles.topContainer}>
                    <Text style={dashboardStyles.textdashboardStyles}>Hello, {name}!</Text>
                    <TouchableOpacity style={dashboardStyles.button} onPress={this.logoutUser}>
                        <Text style={dashboardStyles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {campaignData.loading !== false && <Loader/>}
                {campaignData.loading === false &&
                    <>
                        <View style={dashboardStyles.buttonContainer}>

                            <TouchableOpacity
                                style={buttonSelected == 1 ? dashboardStyles.campaignButtonSelected : dashboardStyles.campaignButtons} 
                                title="Active"
                                onPress={() => {this.campaignsActive(token), this.setState({buttonSelected: 1})}}
                            >
                                <Text style={dashboardStyles.campaignButtonText}>Active</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={buttonSelected == 2 ? dashboardStyles.campaignButtonSelected : dashboardStyles.campaignButtons}
                                title="Opportunity"
                                onPress={() => {this.campaignsOpportunity(token), this.setState({buttonSelected: 2})}}
                            >
                                <Text style={dashboardStyles.campaignButtonText}>Opportunity</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={buttonSelected == 3 ? dashboardStyles.campaignButtonSelected : dashboardStyles.campaignButtons} 
                                title="Negotation"
                                onPress={() => {this.campaignsNegotation(token), this.setState({buttonSelected: 3})}}
                            >
                                <Text style={dashboardStyles.campaignButtonText}>Negoitation</Text>
                            </TouchableOpacity>
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