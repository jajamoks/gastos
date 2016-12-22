import { MONTH_SELECT } from './types';

export const monthSelect = (text) => {
  return {
    type: MONTH_SELECT,
    payload: text
  }
}