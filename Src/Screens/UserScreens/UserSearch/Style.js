import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  container: {
    Flex: 1,
    backgroundColor: 'white',
  },
  flexJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Logo: {
    width: 150,
    height: 100,

    resizeMode: 'contain',
    borderRadius: 7,
  },
  headerWrap: {
    backgroundColor: Theme.primary,
    padding: '4%',
    position: 'absolute',
    width: '100%',
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
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  RadioBtnWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',

    alignSelf: 'center',
  },
  SearchBtn: {
    backgroundColor: '#1a4499',
    alignItems: 'center',
    justifyContent: 'center',

    height: '8%',
    bottom: 7,
    borderRadius: 5,
  },
  SearchBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  RadioBtnWrapper1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
});
export default styles;
