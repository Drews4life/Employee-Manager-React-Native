import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return(
    <Router sceneStyle={{paddingTop: 65, flex: 1}}>
      <Scene key="main" initial>
        <Scene key="login" component={LoginForm} title="Login" initial/>
        <Scene
          onLeft={() => {
            firebase.auth().signOut();
            Actions.login({type:'reset'});
          }}
          leftTitle={"Log out"}

          onRight={() => Actions.employeeCreate()}
          rightButtonStyle={{alignSelf: 'center'}}
          rightTitle={"Add"}
          key="employeeList"
          component={EmployeeList}
          title="Employee List"

        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );

};

export default RouterComponent;
