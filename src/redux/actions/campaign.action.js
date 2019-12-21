import {fetchApi} from '../../service/api';

export const getActiveCampaigns = (payload) => {
    return async(dispatch) => {
        try{
            dispatch({ type: "GET_ACTIVE_CAMPAIGN_LOADING"});
            const response = await fetchApi("/campaign/active", "GET", payload, 200);

            if(response.success){
                dispatch({
                    type: "AUTH_USER_SUCCESS",
                    token: response.token
                });
                dispatch({
                    type: "GET_ACTIVE_CAMPAIGN_SUCCESS",
                    payload: response.responseBody
                })
            } else {
                throw response;
            }
        }catch(error){
            dispatch({ 
                type: "GET_ACTIVE_CAMPAIGN_FAIL",
                payload: error.responseBody
            });
        }
    }
}