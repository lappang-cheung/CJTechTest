import {
    AUTH_USER_SUCCESS,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    GET_USER_SUCCESS,
    USER_LOGGED_OUT_SUCCESS,
    AUTH_USER_FAIL
} from '../actions/types'
// Custom axios package
import axios from '../../service/api'

//  Create user (Created for bonus points)
export const createNewUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: CREATE_USER_LOADING});
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
// Login user
export const loginUser = (payload) => {

    return async (dispatch) => {
        try{
            dispatch({ type: LOGIN_USER_LOADING});
            // Login user response
            const reqData = await axios.post("/auth/signin", payload);
            if(reqData.status === 200){
                dispatch({ 
                    type: LOGIN_USER_SUCCESS
                });
                // Auth data set
                dispatch({
                    type: AUTH_USER_SUCCESS,
                    token: reqData.data.body.token
                });
                //  User data set
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
                payload: error
            });
        }
    };
};
// Log out user
export const logoutUser = () => {
    return async (dispatch) => {
        try {
            // Reset all params to null
            dispatch({
                type: USER_LOGGED_OUT_SUCCESS,
                token: null,
                isLoggedIn: false
            });
            // Set auth data to null
            dispatch({
                type: AUTH_USER_FAIL,
                token: null
            })
        } catch (e) {
            console.log(e);
        }
    }
}