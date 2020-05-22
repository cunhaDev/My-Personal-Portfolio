import React from 'react';
import {View, Image} from 'react-native';
import HeaderHome from '../../assets/headerHome.png';
import styles from './style';
export default function Projetcs() {
  return (
    <View style={styles.container}>
      <Image source={HeaderHome} style={styles.header} />
    </View>
  );
}
