import React from 'react'
import {Button, FlatList, StatusBar, StyleSheet, Text,TextInput, View} from 'react-native'
import styles from '../theme/styles'
import StyledTheme from '../theme'

const HomeSize = ({navigation}) => {
  const systemTypes = [
    {option: 'Central AC', type: 'AC'},
    {option: 'Furnace', type: 'FURNACE'},
    {option: 'Heat Pump', type: 'ASHP'},
    {option: 'Nothing', type: 'NADA'},
    {option: 'Not Sure', type: 'NS'},
  ]
  const Item = ({option}) => (
    <View style={stStyles.item}>
      <Text style={stStyles.option}>{option}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>What is the square footage of your home?</Text>
      <View>
        <TextInput style={{borderColor:'#000',borderWidth:'1px'}} placeholder={'Size'}/>
      </View>
      <Button title={'Next'} onPress={() => {
        navigation.navigate('ContactInfo')
      }}></Button>
    </View>
  )
}
const stStyles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  option: {
    fontSize: 16,
    color: StyledTheme.default.green[1],
  },
})

export default HomeSize
