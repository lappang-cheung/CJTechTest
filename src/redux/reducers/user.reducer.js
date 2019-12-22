//  Custom types
import {
    GET_USER_LOADING,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../actions/types'
import { combineReducers} from 'redux';

// User state
intialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    userDetails: null,
    errors: null
}

// Get user
const getUser = (state = intialState, action) => {
    switch (action.type){
        case GET_USER_LOADING:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                userDetails: null,
                errors: null
            }
        case GET_USER_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                userDetails: action.payload,
                errors: null
            }
        case GET_USER_FAIL:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                userDetails: null,
                errors: action.payload
            }

        default: 
            return state
    }
}

// Combine reducers
export default combineReducers({
    getUser
});