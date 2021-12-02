import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ForgetTxt: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a4499',
  },
  HeadingEmail: {
    margin: '6%',
    color: 'black',
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
  LoginBtn: {
    backgroundColor: '#1a4499',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    height: '12%',
    width: '90%',
    alignSelf: 'center',
    margin: '10%',
    borderRadius: 5,
  },
  LoginBtn1: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    height: '12%',
    width: '90%',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  LoginBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  LoginBtnTxt1: {
    fontSize: 20,
    color: 'black',
  },
  smallHeading1: {
    fontSize: 17,
    color: 'black',
    top: 10,
  },
});
export default styles;
