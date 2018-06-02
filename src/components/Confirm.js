import React, {Component} from 'react';
import {View,Text,StyleSheet,Modal} from 'react-native';
import CardSection from './CardSection';
import ButtonCustom from './ButtonCustom';

const Confirm = ({children, visible, onAccept, onDecline}) => {
  const {container, styleText, styleCard} = styles;
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
        >
        <View style={container}>
          <CardSection style={styleCard}>
            <Text style={styleText}>{children}</Text>
          </CardSection>

          <CardSection>
            <ButtonCustom onPress={onAccept}>Yes</ButtonCustom>
            <ButtonCustom onPress={onDecline}>No</ButtonCustom>
          </CardSection>
        </View>
      </Modal>
    );
  }

const styles = StyleSheet.create({
  styleCard: {
    justifyContent: 'center'
  },
  styleText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'rgba(0,0,0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export default Confirm;
