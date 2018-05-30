import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{paddingTop: 65, flex: 1}}>
      <Scene key="login" component={LoginForm} title="Login"/>
      <Scene key="employeeList" component={EmployeeList} title="Employee List"/>
    </Router>
  );

};

export default RouterComponent;
