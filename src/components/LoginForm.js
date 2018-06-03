import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Tips from 'react-native-tips'
import Card from './Card';
import {connect} from 'react-redux';
import CardSection from './CardSection';
import InputCustom from './InputCustom';
import ButtonCustom from './ButtonCustom';
import Spinner from './Spinner';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {

  state = {isVisible: true};

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});

  }

  authError(){
    if(this.props.error){
      return (
        <View style={{backgroundColor: "#fff"}}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  isLoading() {
    if(this.props.loading){
      return <Spinner size="large"/>;
    } else {
      return (
          <ButtonCustom onPress={this.onButtonPress.bind(this)}>
            Login
          </ButtonCustom>);
    }
  }

  render() {
    return(
      <Card>
        <CardSection>
          <InputCustom
          label={"Email"}
          placeholderValue={"user@mail.com"}
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <InputCustom
          secureTextEntry
          label={"Password"}
          placeholderValue={"***********"}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardSection>
        {this.authError()}

        <Tips
        visible={this.state.isVisible}
        text="This form works both for registration and authentication purposes."
        position={"bottom"}
        offsetTop={50}
        onRequestClose={() => this.setState({isVisible:false})}
        >
        </Tips>

        <CardSection>
          {this.isLoading()}
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});


const mapStateToProps = state => {

  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
