/**
 * App Navigation
 * Data Hooks
 * Styling
 */
import React, {useEffect, useState} from 'react'
import {Platform, StatusBar} from 'react-native'
import {StyleSheet, Text, View, Button} from 'react-native'

import AppNavigator from './navigation/AppNavigator';
// import {ErrorHandler} from './components/ErrorHandler';
import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
import styles from './theme/styles'

import {CallToAction} from './screens'

// const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>*/}
      {/*    <Stack.Screen name='Get Started' component={CallToAction} />*/}
      {/*    <Stack.Screen name='Get Started' component={CallToAction} />*/}
      {/*</Stack.Navigator>*/}
        <AppNavigator />
    </NavigationContainer>
  )
}


export default () => (
  <App />
);


