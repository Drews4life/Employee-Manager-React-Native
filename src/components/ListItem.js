import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import CardSection from './CardSection';


export default class ListItem extends Component {
  render() {
    const {name,phone,shift} = this.props.employee;
    return (
      <CardSection styleCard={styles.Card}>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
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
