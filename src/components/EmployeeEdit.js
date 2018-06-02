import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave} from '../actions';
import CardSection from './CardSection';
import EmployeeForm from './EmployeeForm';
import Card from './Card';
import InputCustom from './InputCustom';
import ButtonCustom from './ButtonCustom';

class EmployeeEdit extends Component {

  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress(){
    const {name,phone,shift} = this.props;
    this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid});
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

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);
