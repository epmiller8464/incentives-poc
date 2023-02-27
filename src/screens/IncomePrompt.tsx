import React from 'react'
import {Button, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native'
import styles from '../theme/styles'
import StyledTheme from '../theme'

const Income = ({navigation}) => {
  const systemTypes = [
    {option: '$0 (or less)', type: '0'},
    //TODO: capture the income level as free form for this question
    {option: '$0 - $30,000', type: '1', rebate_eligible: false,show_free_form:true},
    {option: '$30,000 - $80,000', type: '2'},
    {option: '$80,000 - $150,000', type: '3'},
    {option: '$150,000+', type: '4'},
  ]
  const Item = ({option}) => (
    <View style={styles.item}>
      <Text style={styles.option}>{option}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>What do you estimate your taxable income (after deductions) to be this year?</Text>
      <View>
        <FlatList
          data={systemTypes}
          renderItem={({item}) => <Item option={item.option} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title={'Next'} onPress={() => {
        navigation.navigate('CustomerPriority')
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

export default Income
