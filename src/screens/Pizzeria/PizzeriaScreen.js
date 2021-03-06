import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

const PizzeriaScreen = () => (
  <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default PizzeriaScreen