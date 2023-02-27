import {Button, FlatList, Text, View} from 'react-native'
import styles from '../theme/styles'
import React from 'react'


export default ({navigation})=>{
  return (
    <View style={styles.container}>
      <Text>Doing some math, wait right here. (WIll add wait time to send results)</Text>
      <Button title={'Next'} onPress={() => {navigation.navigate('DisplayCase')}}></Button>
    </View>
  )
}
