import { combineReducers } from 'redux';
import CostsReducer from './CostsReducer';

export default combineReducers({
  costs: CostsReducer
});