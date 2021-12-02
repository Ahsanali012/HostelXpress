import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  Heading: {
    margin: '6%',
    marginTop: '4.5%',
  },
  HeadingTxt1: {
    fontSize: 30,
    color: '#1a4499',
  },
  HeadingTxt2: {
    fontSize: 15,
    color: '#5373b2',
  },
  HeadingEmail: {
    margin: '3%',
    marginTop: '2%',
    marginBottom: '5%',
    marginLeft: '5%',
    color: '#515467',
  },
  HeadingPassword: {
    margin: '6%',
    color: '#515467',
  },
  markerTxin: {
    width: '90%',
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    backgroundColor: '#dddfe3',
    // marginBottom: 17,
  },
  ForgotTxt: {
    alignSelf: 'flex-end',
    color: '#5373b2',
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 10,
  },
  LoginBtn: {
    backgroundColor: '#1a4499',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    height: 37,
    margin: '5%',

    borderRadius: 5,
  },
  LoginBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  RadioBtnWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginTop: '5%',
    width: '93%',
    alignSelf: 'center',
  },
  smallHeading1: {
    fontSize: 17,
    color: 'black',
    top: 10,
  },
  BotomWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '13%',
    alignItems: 'center',
  },
  BottomSignUp: {
    color: '#304d8b',
    alignSelf: 'center',
    marginTop: '3%',
    left: 4,
  },
  AdminBtn: {
    color: '#304d8b',
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
export default styles;
