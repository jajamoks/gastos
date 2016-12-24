import firebase from 'firebase';
import {
  MONTH_SELECT,
  MONTH_ADD,
  MONTH_ADD_SUCCESS,
  MONTH_ADD_FAILURE,
  UPDATE_NEW_MONTH,
  UPDATE_NEW_YEAR,
  MONTHS_FETCH_SUCCESS
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
  const combinedDate = newMonth + '-' + newYear
  console.log(combinedDate)
  return (dispatch) => {
    dispatch({ type: MONTH_ADD })

    firebase.database().ref('/availableMonths')
      .push(combinedDate)
      .then(() => {
        dispatch({ type: MONTH_ADD_SUCCESS })
      })
      .catch(error => {
        console.log(error);
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