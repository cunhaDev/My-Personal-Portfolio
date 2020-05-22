import React from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';

import styles from './styles';
import backgroundImage from '../../assets/images/onBoarding.png';

export default function onBoarding({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.infoContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeName}>Mateus Cunha</Text>

          <View style={styles.welcomeTitleContainer}>
            <Text style={styles.welcomeTitle}>Welcome to</Text>
            <Text style={styles.welcomeTitle}>My Portfolio</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.getStaterdContainer}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.getStaterdText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
