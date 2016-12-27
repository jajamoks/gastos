import firebase from 'firebase';
import {
  COSTS_FETCH_SUCCESS,
  MONTH_SELECT,
  MONTH_ADD,
  MONTH_ADD_SUCCESS,
  MONTH_ADD_FAILURE,
  UPDATE_NEW_MONTH,
  UPDATE_NEW_YEAR,
  MONTHS_FETCH_SUCCESS
} from './types';

export const monthSelect = (month) => {
  return (dispatch) => {
    dispatch({ type: MONTH_SELECT, payload: month });
    firebase.database().ref(`/${month}/`)
      .on('value', snapshot => {
        dispatch({ type: COSTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
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
  const combinedDate = newMonth + '-' + newYear
  return (dispatch) => {
    dispatch({ type: MONTH_ADD })

    firebase.database().ref('/availableMonths')
      .push(combinedDate)
      .then(() => {
        dispatch({ type: MONTH_ADD_SUCCESS })
      })
      .catch(error => {
        dispatch({ type: MONTH_ADD_FAILURE })
      });
  };
};

export const monthsFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/availableMonths`)
      .on('value', snapshot => {
        dispatch({ type: MONTHS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
}