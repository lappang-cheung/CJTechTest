import {
    GET_ACTIVE_CAMPAIGNS_LOADING,
    GET_ACTIVE_CAMPAIGNS_SUCCESS,
    GET_ACTIVE_CAMPAIGNS_FAIL
} from '../actions/types'
import {combineReducers} from 'redux'

const initialState = {
    campaigns: [],
    loading: false
}

const getActiveCampaigns = (state = initialState, action) => {
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

export default combineReducers({
    getActiveCampaigns
});