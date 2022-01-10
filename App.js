import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import SignUp from './src/screens/Signup'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <View style={{flex:1}}>
        <SignUp/>
      </View>
      </SafeAreaProvider>
    )
  }
}
