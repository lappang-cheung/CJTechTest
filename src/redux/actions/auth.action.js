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
import axios from 'axios'

export const createNewUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: CREATE_USER_LOADING});
            axios.defaults.baseURL = "https://cloutjam-real-backend-k2223w.herokuapp.com/v1";
            const reqData = await axios.post("/auth/signin", payload);

            if(reqData.status === 200){
                dispatch({ 
                    type: CREATE_USER_SUCCESS,
                });
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    token: reqData.data.body.token
                });
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: reqData.data
                })
            } else {
                throw reqData;
            }
        }catch(error){
            dispatch({ 
                type: CREATE_USER_FAIL,
                payload: error._response
            });
        }
    };
};

export const loginUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: LOGIN_USER_LOADING});
            axios.defaults.baseURL = "https://cloutjam-real-backend-k2223w.herokuapp.com/v1";
            const reqData = await axios.post("/auth/signin", payload);
            
            if(reqData.status === 200){
                dispatch({ 
                    type: LOGIN_USER_SUCCESS
                });
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    token: reqData.data.body.token
                });
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: reqData.data
                })
            } else {
                throw reqData
            }
        }catch(error){
            dispatch({ 
                type: LOGIN_USER_FAIL,
                payload: error._response
            });
        }
    };
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const {authReducer: {authData: {token}}} = state;
            
            dispatch({
                type: USER_LOGGED_OUT_SUCCESS
            });
        } catch (e) {
            console.log(e);
        }
    }
}