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

// Custom axios package
import axios from '../../service/api'

// Get active campaigns
export const getActiveCampaigns = token => {
    return async (dispatch) => {
        // Try to use token
        try{
            dispatch({ type: GET_ACTIVE_CAMPAIGNS_LOADING});
            // Setting the headers
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            // Grabbing payload
            await axios.get("/campaigns/active")
                .then( response => 
                    dispatch({
                        type: GET_ACTIVE_CAMPAIGNS_SUCCESS,
                        payload: response.data.body
                    })
                )
        }catch(error){
            // Give back the error
            dispatch({
                type: GET_ACTIVE_CAMPAIGNS_FAIL,
                payload: error.responseBody
            });
        }
    };
};
// Get opportunity campaigns
export const getOpportunityCampaigns = token => {
    return async (dispatch) => {
        // Try to use token
        try{
            dispatch({ type: GET_OPPORTUNITY_CAMPAIGNS_LOADING});
            // Setting the headers
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            await axios.get("/campaigns/opportunity")
                .then( response => 
                    dispatch({
                        type: GET_OPPORTUNITY_CAMPAIGNS_SUCCESS,
                        payload: response.data.body
                    })
                )
        }catch(error){
            dispatch({
                type: GET_OPPORTUNITY_CAMPAIGNS_FAIL,
                payload: error.responseBody
            });
        }
    };
};
// Get negoitate campaigns
export const getNegotationCampaigns = token => {
    return async (dispatch) => {
        // Try to use token
        try{
            dispatch({ type: GET_NEGOTATION_CAMPAIGNS_LOADING});
            // Setting the headers
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            await axios.get("/campaigns/negotiation")
                .then( response => 
                    dispatch({
                        type: GET_NEGOTATION_CAMPAIGNS_SUCCESS,
                        payload: response.data.body
                    })
                )
        }catch(error){
            // Give back the error
            dispatch({
                type: GET_NEGOTATION_CAMPAIGNS_FAIL,
                payload: error.responseBody
            });
        }
    };
};