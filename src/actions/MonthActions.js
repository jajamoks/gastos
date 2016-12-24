import {
  MONTH_SELECT,
  MONTH_ADD,
  UPDATE_NEW_MONTH,
  UPDATE_NEW_YEAR
} from './types';

export const monthSelect = (text) => {
  return {
    type: MONTH_SELECT,
    payload: text
  }
}

export const updateNewMonth = (text) => {
  return {
    type: UPDATE_NEW_MONTH,
    payload: text
  }
}

export const updateNewYear = (text) => {
  return {
    type: UPDATE_NEW_YEAR,
    payload: text
  }
}

export const monthAdd = ({ newMonth, newYear }) => {

}