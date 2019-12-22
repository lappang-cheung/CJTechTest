// Custom Types
import {
    AUTH_USER_FAIL,
    AUTH_USER_SUCCESS,
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    USER_LOGGED_OUT_SUCCESS
} from '../actions/types'
import {combineReducers} from 'redux';

// Set state for auth
authInitialState = {
    token: null,
    isLoggedIn: false
}

// Set state for user
userInitialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errors: null,
}

// auth user
const authData = (state = authInitialState, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return {
              token: action.token,
              isLoggedIn: true
            }

        case CREATE_USER_FAIL:
        case LOGIN_USER_FAIL :
        case AUTH_USER_FAIL:
            return {
                token: null,
                isLoggedIn: false
            }
        default:
          return state;
    }
}

// logout user
const logoutUser = (state=authInitialState, action) => {
    switch(action.type){
        case USER_LOGGED_OUT_SUCCESS:
            return {
                token: null,
                isLoggedIn: false
            };
        default:
            return state;
    };
};



// login user
const loginUser = (state = userInitialState, action) => {
    switch(action.type) {
        case LOGIN_USER_LOADING:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                errors: null,
            }

        case LOGIN_USER_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                errors: null,
            }

        case LOGIN_USER_FAIL:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                errors: action.payload,
            }

        default: 
            return state;
    }
}

// create user
const createUser = (state = userInitialState, action) => {
    switch(action.type) {
        case CREATE_USER_LOADING:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                errors: null,
            }

        case CREATE_USER_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                errors: null,
            }

        case CREATE_USER_FAIL:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                errors: action.payload,
            }

        default: 
            return state;
    }
}

//  combine reducers
export default combineReducers({
    createUser,
    loginUser,
    logoutUser,
    authData
});