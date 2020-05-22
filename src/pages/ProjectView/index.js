import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import HeaderHome from '../../assets/headerHome.png';
export default function ProjectsView() {
  return (
    <View style={styles.container}>
      <Text>ProjectsView</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
