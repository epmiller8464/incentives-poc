import React from 'react'
import {Button, StatusBar, Text, TextInput, View} from 'react-native'
import styles from '../theme/styles'

const EnterAddress = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>Please enter your home’s address?</Text>
      <TextInput style={{borderColor:'#000',borderWidth:'1px'}} placeholder={'Size'}/>

      <Button title={'Next'} onPress={()=>{navigation.navigate('HomeSize')}}></Button>
    </View>
  );
}

export default EnterAddress
