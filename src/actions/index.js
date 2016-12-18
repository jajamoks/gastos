import {
  UPDATE_COST,
  UPDATE_CATEGORY
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