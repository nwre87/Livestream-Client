import React, { Component } from 'react';

import {
  TouchableHighlight,
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class SignUpComponent extends Component{
  signUnButton(){
    console.log('Sign up clicked');
  }
  render() {
    return (
      <View>
        <TouchableHighlight 
          onPress={this.signUnButton.bind(this)}>
          <View>
            <Text>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}