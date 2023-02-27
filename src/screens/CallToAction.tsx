import React from 'react'
import {Button, StatusBar, Text, View} from 'react-native'
import styles from '../theme/styles'

const CallToAction = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>Learn what rebates & incentives you are eligible for.</Text>
      <Button title={'Get Started'} onPress={()=>{navigation.navigate('SystemType')}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default CallToAction
