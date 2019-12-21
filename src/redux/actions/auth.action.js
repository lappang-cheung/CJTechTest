import {fetchApi} from '../../service/api';

export const createNewUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: "CREATE_USER_LOADING"});
            const response = await fetchApi("/auth/register", "POST", payload, 200);

            if(response.success){
                dispatch({ 
                    type: "CREATE_USER_SUCCESS",
                    token: response.token
                });
                dispatch({
                    type: "GET_USER_SUCCESS",
                    payload: response.responseBody
                })
            } else {
                throw response;
            }
        }catch(error){
            dispatch({ 
                type: "CREATE_USER_FAIL",
                payload: error.responseBody
            });
        }
    };
};

export const loginUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: "LOGIN_USER_LOADING"});
            const response = await fetchApi("/auth/signin", "POST", payload, 200);
            console.log(response)

            if(response.success){
                dispatch({ 
                    type: "LOGIN_USER_SUCCESS",
                    token: response.token
                });
                dispatch({
                    type: "GET_USER_SUCCESS",
                    payload: response.responseBody
                })
            } else {
                throw response;
            }
        }catch(error){
            dispatch({ 
                type: "LOGIN_USER_FAIL",
                payload: error.responseBody
            });
        }
    };
};

