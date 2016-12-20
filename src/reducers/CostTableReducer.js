import { SAVE_COST } from '../actions/types'

const INITIAL_STATE = {
  records: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COST:
      return Object.assign({}, state, {
        records: [
          ...state.records, action.payload
        ]
      })
    default:
      return state;
  }
}