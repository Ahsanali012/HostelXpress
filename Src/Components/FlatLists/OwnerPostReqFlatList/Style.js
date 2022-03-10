import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../../Screens/Utils/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  Logo: {
    width: 120,
    height: 100,
    padding: 20,

    resizeMode: 'cover',
    borderRadius: 7,
  },
  Logo1: {
    width: Theme.wp('30%'),
    height: Theme.hp('14%'),

    resizeMode: 'cover',
  },
});
