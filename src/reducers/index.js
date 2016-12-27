import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CostInputReducer from './CostInputReducer';
import CostsReducer from './CostsReducer';
import MonthReducer from './MonthReducer';

export default combineReducers({
  auth: AuthReducer,
  cost: CostInputReducer,
  costs: CostsReducer,
  month: MonthReducer
});