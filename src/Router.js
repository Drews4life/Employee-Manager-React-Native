import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{paddingTop: 65, flex: 1}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login"/>
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightButtonStyle={{alignSelf: 'center'}}
          rightTitle={"Add"}
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Scene>
    </Router>
  );

};

export default RouterComponent;
