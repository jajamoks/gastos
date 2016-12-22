import moment from 'moment';
import { SAVE_COST, MONTH_SELECT } from '../actions/types'

moment.locale('es')

const INITIAL_STATE = {
  records: [],
  selectedMonth: moment().format('MMM YY').toUpperCase()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COST:
      return Object.assign({}, state, {
        records: [
          ...state.records, action.payload
        ]
      })
    case MONTH_SELECT:
      return { ...state, selectedMonth: action.payload }
    default:
      return state;
  }
}