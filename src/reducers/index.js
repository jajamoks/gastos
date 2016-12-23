import { combineReducers } from 'redux';
import CostInputReducer from './CostInputReducer';
import CostTableReducer from './CostTableReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  cost: CostInputReducer,
  costRecords: CostTableReducer
});