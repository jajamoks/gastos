import { combineReducers } from 'redux';
import CostInputReducer from './CostInputReducer';
import CostTableReducer from './CostTableReducer';

export default combineReducers({
  cost: CostInputReducer,
  costRecords: CostTableReducer
});