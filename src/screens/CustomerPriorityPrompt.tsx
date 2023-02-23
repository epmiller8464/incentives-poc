import React from 'react'
import {Button, StatusBar, Text, FlatList, View, StyleSheet} from 'react-native'
import StyledTheme from '../theme'
import styles from '../theme/styles'

const CustomerPriorities = ({navigation}) => {

  const DATA = [
    {
      id: 'cost',
      option: 'lower upfront cost',
    },
    {
      id: 'energy',
      option: 'reduce monthly energy/utility bills',
    },
    {
      id: 'emissions',
      option: 'reduce carbon emissions from my house',
    },
    {
      id: 'comfort',
      option: 'improve comfort inside my house',
    },
    {
      id: 'quietness',
      option: 'quietness',
    },
    {
      id: 'speed',
      option: 'speed of replacement',
    },
  ]
  const Item = ({option}) => (
    <View style={screenStyles.item}>
      <Text style={screenStyles.option}>{option}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>What are the relative prioritization of these factors? </Text>
      <View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <Item option={item.option} />}
          keyExtractor={item => item.id}
        />
      </View>

      <Button title={'Next'} onPress={() => {
        navigation.navigate('HomeSize')
      }}></Button>
    </View>
  )
}
const screenStyles = StyleSheet.create({
  item: {
    backgroundColor: '#e2e2e2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  option: {
    fontSize: 16,
    color: StyledTheme.default.green[1],
  },
})

export default CustomerPriorities
