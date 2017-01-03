import moment from 'moment';
import {
  MONTH_SELECT,
  MONTHS_FETCH_SUCCESS
} from '../actions/types';

moment.locale('es')

const INITIAL_STATE = {
  selectedMonth: moment().format('MMMM-YYYY'),
  availableMonths: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MONTH_SELECT:
      return { ...state, selectedMonth: action.payload }
    case MONTHS_FETCH_SUCCESS:
      return { ...state, availableMonths: action.payload }
    default:
      return state;
  }
}