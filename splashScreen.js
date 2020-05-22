import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
const SplashScreen: React.FC = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Boarding');
    }, 2500);
  }, [navigation]);

  return (
    <>
      <View style={style.container}>
        <LottieView
          source={require('./src/assets/mario-loading.json')}
          autoPlay
        />
      </View>
      <View style={style.Textcontainer}>
        <Text style={style.dev}>Developed by</Text>
        <Text style={style.dev}> Mateus Cunha</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  Textcontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dev: {
    fontWeight: 'bold',
    opacity: 0.4,
    color: '#260F38',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
