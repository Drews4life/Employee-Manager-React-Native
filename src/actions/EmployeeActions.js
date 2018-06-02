import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE} from './types';
import {EMPLOYEE_CREATE} from './types';
import {EMPLOYEE_FETCH_SUCCESS} from './types';
import {EMPLOYEE_SAVE_SUCCESS} from './types';
import {EMPLOYEE_RESET} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  };
};
export const employeeFormReset = () => {
  return {
    type: EMPLOYEE_RESET
  };
};


export const employeeCreate = ({name,phone,shift}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name,phone,shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const employeeSave = ({name,phone,shift,uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name,phone,shift})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVE_SUCCESS});
        Actions.employeeList({ type: 'reset' });
      });
  };
};
