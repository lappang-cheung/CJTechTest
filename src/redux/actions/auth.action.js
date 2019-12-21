import {
    AUTH_USER_SUCCESS,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    GET_USER_SUCCESS,
    USER_LOGGED_OUT_SUCCESS
} from '../actions/types'
import {fetchApi} from '../../service/api';

export const createNewUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: CREATE_USER_LOADING});
            const response = await fetchApi("/auth/register", "POST", payload, 200);

            if(response.success){
                dispatch({ 
                    type: CREATE_USER_SUCCESS,
                });
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    token: response.token
                });
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: response.responseBody
                })
            } else {
                throw response;
            }
        }catch(error){
            dispatch({ 
                type: CREATE_USER_FAIL,
                payload: error.responseBody
            });
        }
    };
};

export const loginUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: LOGIN_USER_LOADING});
            const response = await fetchApi("/auth/signin", "POST", payload, 200);

            if(response.success){
                dispatch({ 
                    type: LOGIN_USER_SUCCESS
                });
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    token: response.token
                });
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: response.responseBody
                })
            } else {
                throw response;
            }
        }catch(error){
            dispatch({ 
                type: LOGIN_USER_FAIL,
                payload: error.responseBody
            });
        }
    };
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const {authReducer: {authData: {token}}} = state;
            const response = await fetchApi("/auth/logout", "DELETE", null, 200, token);
            dispatch({
                type: USER_LOGGED_OUT_SUCCESS
            });
        } catch (e) {
            console.log(e);
        }
    }
}