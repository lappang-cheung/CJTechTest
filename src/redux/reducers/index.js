import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import campaignReducer from './campaign.reducer';

const reducers = {
    authReducer,
    userReducer,
    campaignReducer,
    form: formReducer
};

export default combineReducers(reducers);