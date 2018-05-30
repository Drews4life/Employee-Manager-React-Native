import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Header from './src/components/Header';
import Router from './src/Router';


export default class App extends React.Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyBzeC7OYNRuZfEWxoE3m_JC6Ye0epu2TQs",
      authDomain: "employeesmanager-273de.firebaseapp.com",
      databaseURL: "https://employeesmanager-273de.firebaseio.com",
      projectId: "employeesmanager-273de",
      storageBucket: "employeesmanager-273de.appspot.com",
      messagingSenderId: "270518023984"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
