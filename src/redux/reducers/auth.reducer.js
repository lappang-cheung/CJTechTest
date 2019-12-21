import {
    AUTH_USER_FAIL,
    AUTH_USER_SUCCESS,
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../actions/types'
import {combineReducers} from 'redux';

authInitialState = {
    token: null,
    isLoggedIn: false
}

userInitialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errors: null,
}

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

export default combineReducers({
    createUser,
    loginUser,
    authData
});