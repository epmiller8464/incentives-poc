import React from 'react'
import {Button, StatusBar, Text, View,TextInput} from 'react-native'
import styles from '../theme/styles'

const ContactInfo = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>What’s the best way to share your eligible rebates with you?</Text>
      <View>
        <TextInput style={{borderColor:'#000',borderWidth:'1px'}} placeholder={'Jim Cooper'}/>
        <TextInput style={{borderColor:'#000',borderWidth:'1px'}} placeholder={'Email'}/>
        <TextInput style={{borderColor:'#000',borderWidth:'1px'}} placeholder={'Phone number'}/>
      </View>
      <Button title={'Next'} onPress={()=>{navigation.navigate('DoingSomeMath')}}></Button>
    </View>
  );
}

export default ContactInfo
