import {
    GET_ACTIVE_CAMPAIGNS_LOADING,
    GET_ACTIVE_CAMPAIGNS_SUCCESS,
    GET_ACTIVE_CAMPAIGNS_FAIL
} from '../actions/types'

import axios from '../../service/api'

export const getActiveCampaigns = token => {
    return async (dispatch) => {
        
        try{
            dispatch({ type: GET_ACTIVE_CAMPAIGNS_LOADING});
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            await axios.get("/campaigns/active")
                .then( response => 
                    dispatch({
                        type: GET_ACTIVE_CAMPAIGNS_SUCCESS,
                        payload: response.data.body
                    })
                )
        }catch(error){
            dispatch({
                type: GET_ACTIVE_CAMPAIGNS_FAIL,
                payload: error.responseBody
            });
        }
    };
};