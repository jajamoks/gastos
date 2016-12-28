import {
  COST_CREATE,
  COST_EDIT_LOAD,
  COST_EDIT_SUCCESS,
  UPDATE_COST,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  UPDATE_DESCRIPTION,
  UPDATE_COST_MONTH
} from '../actions/types';

const INITIAL_STATE = {
  amount: '',
  category: '',
  subcategory: '',
  description: '',
  cost_month: ''
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
    case UPDATE_COST_MONTH:
      return { ...state, cost_month: action.payload }
    case COST_CREATE:
      return INITIAL_STATE;
    case COST_EDIT_LOAD:
      return { ...state,
        amount: action.payload.amount,
        category: action.payload.category,
        subcategory: action.payload.subcategory,
        description: action.payload.description }
    case COST_EDIT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}