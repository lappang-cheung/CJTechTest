import {
    GET_ACTIVE_CAMPAIGNS_LOADING,
    GET_ACTIVE_CAMPAIGNS_SUCCESS,
    GET_ACTIVE_CAMPAIGNS_FAIL,
    GET_OPPORTUNITY_CAMPAIGNS_LOADING,
    GET_OPPORTUNITY_CAMPAIGNS_SUCCESS,
    GET_OPPORTUNITY_CAMPAIGNS_FAIL,
    GET_NEGOTATION_CAMPAIGNS_LOADING,
    GET_NEGOTATION_CAMPAIGNS_SUCCESS,
    GET_NEGOTATION_CAMPAIGNS_FAIL
} from '../actions/types'
import {combineReducers} from 'redux'

const activeInitialState = {
    campaigns: [],
    loading: false
}

const opportunityInitialState = {
    campaigns: [],
    loading: false
}

const negotationInitialState = {
    campaigns: [],
    loading: false
}

const getActiveCampaigns = (state = activeInitialState, action) => {
    switch(action.type) {

        case GET_ACTIVE_CAMPAIGNS_LOADING:
            return {
                ...state,
                loading: true
            };
        
        case GET_ACTIVE_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                campaigns: action.payload,
                loading: false
            };

        case GET_ACTIVE_CAMPAIGNS_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

const getOpportunityCampaigns = (state = opportunityInitialState, action) => {
    switch(action.type) {

        case GET_OPPORTUNITY_CAMPAIGNS_LOADING:
            return {
                ...state,
                loading: true
            };
        
        case GET_OPPORTUNITY_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                campaigns: action.payload,
                loading: false
            };

        case GET_OPPORTUNITY_CAMPAIGNS_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

const getNegotationCampaigns = (state = negotationInitialState, action) => {
    switch(action.type) {

        case GET_NEGOTATION_CAMPAIGNS_LOADING:
            return {
                ...state,
                loading: true
            };
        
        case GET_NEGOTATION_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                campaigns: action.payload,
                loading: false
            };

        case GET_NEGOTATION_CAMPAIGNS_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default combineReducers({
    getActiveCampaigns,
    getOpportunityCampaigns,
    getNegotationCampaigns
});