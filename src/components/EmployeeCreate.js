import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate, employeeFormReset} from '../actions';
import CardSection from './CardSection';
import Card from './Card';
import ButtonCustom from './ButtonCustom';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  componentWillMount(){
    this.props.employeeFormReset();
  }

  onCreateButtonPress() {
    const {name,phone,shift} = this.props;

    this.props.employeeCreate({name,phone,shift});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <ButtonCustom onPress={this.onCreateButtonPress.bind(this)}>
            Create
          </ButtonCustom>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate, employeeFormReset
})(EmployeeCreate);

const styles = StyleSheet.create({
  picker: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20
  }
});
