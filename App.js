import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import SignUp from './src/screens/Signup'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <SignUp/>
      </View>
    )
  }
}
