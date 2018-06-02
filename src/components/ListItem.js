import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View,Text,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import CardSection from './CardSection';


export default class ListItem extends Component {

  onRowPress(){
      Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {name,phone,shift} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection styleCard={styles.Card}>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15
  },
  Card: {

  }
});
