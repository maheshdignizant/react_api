import { combineReducers } from 'redux';
import { ApiToken } from './apiReducers'

const reducers = combineReducers(
    {
        Token: ApiToken,
    }
);
export default reducers;