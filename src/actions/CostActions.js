import {
  RESET_COST,
  SAVE_COST,
  UPDATE_COST,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  UPDATE_DESCRIPTION,
  UPDATE_COST_MONTH
} from './types';

export const updateCost = (amount) => {
  return {
    type: UPDATE_COST,
    payload: amount
  }
}

export const updateCategory = (text) => {
  return {
    type: UPDATE_CATEGORY,
    payload: text
  }
}

export const updateSubcategory = (text) => {
  return {
    type: UPDATE_SUBCATEGORY,
    payload: text
  }
}

export const updateDescription = (text) => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: text
  }
}

export const updateCostMonth = (text) => {
  return {
    type: UPDATE_COST_MONTH,
    payload: text
  }
}

export const submitCost = ({ amount, category, subcategory, description, date }) => {
  return (dispatch) => {
    dispatch({ type: SAVE_COST, payload: { amount, category, subcategory, description, date } });
    dispatch({ type: RESET_COST })
  }
}
