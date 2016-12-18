import { combineReducers } from 'redux';
import CostInputReducer from './CostInputReducer';

export default combineReducers({
  cost: CostInputReducer
});