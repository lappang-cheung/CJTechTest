// Required classes
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

// Redux actions
import {logoutUser} from "../redux/actions/auth.action";
import {
    getActiveCampaigns, 
    getOpportunityCampaigns, 
    getNegotationCampaigns
} from "../redux/actions/campaign.action";

// Loader
import Loader from '../components/Loader';
//  Custom styles
import dashboardStyles from '../styles/Dashboard/dashboardStyles'


class Dashboard extends Component {
    /*
     * Need to check which data is being shown: "Active", "Opportunity" & "Negoitation"
     * Minor state to check which button is active
     */
    state = {
        campaignData: {},
        buttonSelected: 1
    }

    // Mount the Active Campaign
    componentDidMount = async () => {
       await this.campaignsActive(this.props.auth.token)
    }
    // Log out user
    logoutUser = () => {
        this.props.dispatch(logoutUser());
    }

    // Set data to be Active
    campaignsActive = async (token) => {
        await this.props.dispatch(getActiveCampaigns(token));
        this.loadCampaignData(this.props.activeCampaigns)
    };

    // Set data to be Opportunity
    campaignsOpportunity = async (token) => {
        await this.props.dispatch(getOpportunityCampaigns(token));
        this.loadCampaignData(this.props.opportunityCampaigns)
    };
    // Set data to be Negoitation
    campaignsNegotation = async (token) => {
        await this.props.dispatch(getNegotationCampaigns(token));
        this.loadCampaignData(this.props.negotationCampaigns)
    };

    // Data switch between the campaigns
    loadCampaignData = (data) => {
        this.setState({
            campaignData: data
        });
    };

    render() {

        // Get the user data and token
        const {getUser:{userDetails}, auth: {token}} = this.props;
        // Get the state
        const {campaignData, buttonSelected} = this.state;
        // Get the name and set to null if nothing returns
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
                                disabled={buttonSelected == 1}
                                style={buttonSelected == 1 ? dashboardStyles.campaignButtonSelected : dashboardStyles.campaignButtons} 
                                title="Active"
                                onPress={() => {this.campaignsActive(token), this.setState({buttonSelected: 1})}}
                            >
                                <Text style={dashboardStyles.campaignButtonText}>Active</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            disabled={buttonSelected == 2}
                                style={buttonSelected == 2 ? dashboardStyles.campaignButtonSelected : dashboardStyles.campaignButtons}
                                title="Opportunity"
                                onPress={() => {this.campaignsOpportunity(token), this.setState({buttonSelected: 2})}}
                            >
                                <Text style={dashboardStyles.campaignButtonText}>Opportunity</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={buttonSelected == 3}
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