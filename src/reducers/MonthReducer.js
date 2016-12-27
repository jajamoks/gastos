import moment from 'moment';
import {
  MONTH_SELECT,
  UPDATE_NEW_MONTH,
  UPDATE_NEW_YEAR,
  MONTH_ADD,
  MONTH_ADD_SUCCESS,
  MONTH_ADD_FAILURE,
  MONTHS_FETCH_SUCCESS
} from '../actions/types';

moment.locale('es')

const INITIAL_STATE = {
  selectedMonth: moment().format('MMMM-YYYY'),
  newMonth: '',
  newYear: '',
  availableMonths: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MONTH_SELECT:
      return { ...state, selectedMonth: action.payload }
    case UPDATE_NEW_MONTH:
      return { ...state, newMonth: action.payload }
    case UPDATE_NEW_YEAR:
      return { ...state, newYear: action.payload }
    case MONTHS_FETCH_SUCCESS:
      return { ...state, availableMonths: action.payload }
    default:
      return state;
  }
}