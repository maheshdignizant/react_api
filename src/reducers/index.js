import { combineReducers } from 'redux';
import { ApiToken } from './apiReducers'
import { UserData } from './userData'

const reducers = combineReducers(
    {
        Token: ApiToken,
        UserData : UserData
    }
);
export default reducers;