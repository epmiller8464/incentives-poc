import 'react-native-gesture-handler'
import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper'

// import {DataProvider} from './src/hooks';
import AppNavigation from './src/App'

export default function App() {
  return (
    // <DataProvider>
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
    // </DataProvider>
  )
}
