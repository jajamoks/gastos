import {
  UPDATE_COST,
  UPDATE_CATEGORY
} from '../actions/types';

const INITIAL_STATE = {
  amount: '',
  category: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case UPDATE_COST:
      return { ...state, amount: action.payload }
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload }
    default:
      return state;
  }
}