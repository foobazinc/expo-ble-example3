import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { scanAndConnect, stopDeviceScan } from './src/lib/ble'

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Scan' onPress={scanAndConnect} />
      <Button title='Stop' onPress={stopDeviceScan} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
