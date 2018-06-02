import _ from 'lodash';
import Communications from 'react-native-communications';
import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import CardSection from './CardSection';
import EmployeeForm from './EmployeeForm';
import Card from './Card';
import InputCustom from './InputCustom';
import ButtonCustom from './ButtonCustom';
import Confirm from './Confirm';

class EmployeeEdit extends Component {

  state = {showModal: false};

  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress(){
    const {name,phone,shift} = this.props;
    this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid});
  }

  onTextMessage() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Hey, you upcoming shift is on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({uid: this.props.employee.uid})
    Actions.employeeList({type: 'reset'});
  }

  onDecline() {
    this.setState({showModal: false});
  }

  render(){
    return (
      <Card>
        <EmployeeForm/>

        <CardSection>
          <ButtonCustom onPress={this.onButtonPress.bind(this)}>
            Update
          </ButtonCustom>
        </CardSection>

        <CardSection>
          <ButtonCustom onPress={this.onTextMessage.bind(this)}>
            Text Schedule
          </ButtonCustom>
        </CardSection>

        <CardSection>
          <ButtonCustom onPress={() => this.setState({showModal: !this.state.showModal})}>
            Delete
          </ButtonCustom>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          >
          Do you really want to delete this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
