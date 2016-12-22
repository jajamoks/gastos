import {
  UPDATE_COST,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  UPDATE_DESCRIPTION,
  RESET_COST
} from '../actions/types';

const INITIAL_STATE = {
  amount: '',
  category: '',
  subcategory: '',
  description: '',
  currency: 'colones'
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case UPDATE_COST:
      return { ...state, amount: action.payload }
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload }
    case UPDATE_SUBCATEGORY:
      return { ...state, subcategory: action.payload }
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload }
    case RESET_COST:
      return INITIAL_STATE;
    default:
      return state;
  }
}