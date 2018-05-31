import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import CardSection from './CardSection';
import Card from './Card';
import InputCustom from './InputCustom';
import ButtonCustom from './ButtonCustom';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputCustom
            label="Name"
            placeholderValue="Josh"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({prop:"name",value:text})}
          />
        </CardSection>

        <CardSection>
          <InputCustom
            label="Phone"
            placeholderValue="+3801382345"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({prop:"phone",value:text})}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.picker}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({prop:"shift",value:day})}
            style={{flex: 1}}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <ButtonCustom>
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

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);

const styles = StyleSheet.create({
  picker: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20
  }
});
