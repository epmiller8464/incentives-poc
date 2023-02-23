import React from 'react'
import {Button, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native'
import styles from '../theme/styles'
import StyledTheme from '../theme'

const SelectUtility = ({navigation}) => {
  const systemTypes = [
    {option: 'Austin Energy', type: 'Electric'},
    {option: 'Texas Gas', type: 'Gas'},
  ]
  const Item = ({option}) => (
    <View style={styles.item}>
      <Text style={styles.option}>{option}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>Who provides your home with power?</Text>
      <View>
        <FlatList
          data={systemTypes}
          renderItem={({item}) => <Item option={item.option} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title={'Next'} onPress={() => {
        navigation.navigate('ExistingHVACSystem')
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

export default SelectUtility
