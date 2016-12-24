import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CostInputReducer from './CostInputReducer';
import CostTableReducer from './CostTableReducer';
import MonthReducer from './MonthReducer';

export default combineReducers({
  auth: AuthReducer,
  cost: CostInputReducer,
  costRecords: CostTableReducer,
  month: MonthReducer
});