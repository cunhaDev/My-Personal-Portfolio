import {StyleSheet, Dimensions} from 'react-native';

const {height: Height, width: Width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Width,
    height: Height - Height / 3,
    zIndex: 0,
    alignItems: 'flex-end',
  },
  infoContainer: {
    alignItems: 'flex-end',
    bottom: Height - Height / 1.18,
  },
  welcomeContainer: {
    width: Width - Width / 8,
    height: 200,
    backgroundColor: '#1A012B',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 80,
  },
  welcomeName: {
    color: '#BFA9CD',
    fontSize: 19,
    marginTop: 15,
    alignSelf: 'baseline',
    paddingHorizontal: 20,
  },
  welcomeTitleContainer: {
    alignItems: 'center',
    alignSelf: 'baseline',
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    color: '#FFF',
    fontSize: 37,
    fontWeight: 'bold',
    marginTop: 5,
  },
  getStaterdContainer: {
    backgroundColor: '#373574',
    width: Width - Width / 2,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    bottom: 25,
  },
  getStaterdText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default styles;
