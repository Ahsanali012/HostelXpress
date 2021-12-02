import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    // height: 100,
    // marginVertical: 10,

    resizeMode: 'cover',
  },
});
export default styles;
