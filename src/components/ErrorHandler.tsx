import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {View, Text, TouchableOpacity} from 'react-native'


const myErrorHandler = (error: Error) => {
  console.error(error)
}

function ErrorFallback({resetErrorBoundary}: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 12,
        backgroundColor: '#1A8FE3',
      }}
    >
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 26,
            marginBottom: 16,
            color: 'white',
            fontWeight: '600',
          }}
        >
          {' '}
          Something went wrong:{' '}
        </Text>
        <TouchableOpacity onPress={resetErrorBoundary}>
          <Text style={{fontWeight: '500', fontSize: 20, color: 'white'}}>
            Try Again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const ErrorHandler = ({children}: {children: React.ReactNode}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
)
