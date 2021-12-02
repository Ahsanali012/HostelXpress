import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    Flex: 1,
    backgroundColor: 'white',
  },
  Logo: {
    width: 150,
    height: 100,

    resizeMode: 'contain',
    borderRadius: 7,
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#d4d4d4',
    margin: 10,
    marginTop: 20,
  },
  Card: {
    height: 150,
    width: 300,
    marginLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    // alignItems: 'center',
    marginTop: 40,
  },
});
export default styles;
