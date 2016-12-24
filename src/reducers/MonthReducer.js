import moment from 'moment';
import {
  MONTH_SELECT,
  UPDATE_NEW_MONTH,
  UPDATE_NEW_YEAR
} from '../actions/types';

moment.locale('es')

const INITIAL_STATE = {
  selectedMonth: moment().format('MMMM-YY'),
  newMonth: '',
  newYear: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MONTH_SELECT:
      return { ...state, selectedMonth: action.payload }
    case UPDATE_NEW_MONTH:
      return { ...state, newMonth: action.payload }
    case UPDATE_NEW_YEAR:
      return { ...state, newYear: action.payload }
    default:
      return state;
  }
}