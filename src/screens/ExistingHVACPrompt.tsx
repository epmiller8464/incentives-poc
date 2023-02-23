import React from 'react'
import {Button, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native'
import styles from '../theme/styles'
import StyledTheme from '../theme'

const ExistingHVACSystem = ({navigation}) => {
  const systemTypes = [
    {option: 'Central AC', type: 'AC'},
    {option: 'Furnace', type: 'FURNACE'},
    {option: 'Heat Pump', type: 'ASHP'},
    {option: 'Nothing', type: 'NADA'},
    {option: 'Not Sure', type: 'NS'},
  ]
  const Item = ({option}) => (
    <View style={styles.item}>
      <Text style={styles.option}>{option}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>What type of system do you have today?</Text>
      <View>
        <FlatList
          data={systemTypes}
          renderItem={({item}) => <Item option={item.option} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title={'Next'} onPress={() => {
        navigation.navigate('ExistingHVACSystemAge')
      }}></Button>
    </View>
  )
}
const stStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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

export default ExistingHVACSystem
