import _ from 'lodash';
import moment from 'moment';
import firebase from 'firebase';
import {
  COSTS_FETCH_SUCCESS,
  MONTH_CREATE,
  MONTH_SELECT,
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

export const monthCreate = ({ availableMonths }) => {
  const thisMonth = moment().format('MMMM-YYYY')
  return (dispatch) => {
    if (!_.includes(availableMonths, thisMonth)) {
      firebase.database().ref('/availableMonths')
        .push(thisMonth)
        .then(() => dispatch({ type: MONTH_CREATE }))
    }
  }
};

export const monthsFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/availableMonths`)
      .on('value', snapshot => {
        dispatch({ type: MONTHS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
}