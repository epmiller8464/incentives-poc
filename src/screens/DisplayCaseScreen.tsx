import {Button, FlatList, Text, View} from 'react-native'
import styles from '../theme/styles'
import React from 'react'


export default ({navigation})=>{
  return (
    <View style={styles.container}>
      <Text>[Display Case]</Text>
      <Text>A Beautiful Option One</Text>
      <Text>A Beautiful Option Two</Text>
      <Text>A Beautiful Option Three</Text>
    </View>
  )
}
