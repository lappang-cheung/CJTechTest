// Redux packages
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Custom reducers
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import campaignReducer from './campaign.reducer';

// All reducers from various places
const reducers = {
    authReducer,
    userReducer,
    campaignReducer,
    form: formReducer
};

// Export one big reducers
export default combineReducers(reducers);