import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import HeaderSocial from '../../assets/headerSocial.png';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ico from 'react-native-vector-icons/MaterialIcons';
export default function SocialNetwork() {
  return (
    <View style={styles.container}>
      <Image source={HeaderSocial} style={styles.header} />
      <View style={styles.containerBotton}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="instagram" color={'#1A012B'} size={70} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="linkedin-box" color={'#1A012B'} size={70} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="whatsapp" color={'#1A012B'} size={70} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerBotton}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="facebook-box" color={'#1A012B'} size={70} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ico name="call" color={'#1A012B'} size={70} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="discord" color={'#1A012B'} size={70} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
