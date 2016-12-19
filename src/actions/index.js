import {
  SUBMIT_COST,
  UPDATE_COST,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY
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

export const submitCost = ({ amount, category, subcategory, date }) => {
  return {
    type: SUBMIT_COST,
    payload: { amount, category, subcategory, date }
  }
}