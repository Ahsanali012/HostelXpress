//import liraries
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Image,
} from 'react-native';
import styles from './Style';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {db} from '../Utils/Exports';
import authentication from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Loginscreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emaill, setEmaill] = useState('');
  const [passwordd, setpasswordd] = useState('');
  const [value, setValue] = React.useState('');
  const [loader, Setloader] = React.useState(false);

  const setValuein = async value1 => {
    await AsyncStorage.setItem('this', JSON.stringify(value1));
    const value2 = await AsyncStorage.getItem('this');
    setValue(value1);
    console.log('Value =====', value2);
  };
  // const getValue = async () => {
  //   const value1 = await AsyncStorage.getItem('this');
  //   console.log('getting', value1);
  // };
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email('Invalid email').required(),
    Password: Yup.string().required(),
  });
  const validation = Yup.object().shape({
    Email: Yup.string().required(),
    Password: Yup.string()
      .min(6, 'Enter min 6 digit')
      .required()
      .max(8, 'Input short digits string')
      .required(),
  });
  console.log('State Value', value);

  // const getUserId = async () => {
  //   const Auth = authentication();
  //   const currentUid = Auth.currentUser.uid;
  //   const ref = db.ref('Owner/' + currentUid);

  //   await ref.on('value', snapshot => {
  //     if (snapshot.val()) {
  //       const {uid} = snapshot.val();
  //       let UserId = {uid};

  //       {
  //         UserId === currentUid ? navigation.navigate('BottomTabOwner') : null;
  //       }

  //       console.log('currentUid', ref);

  //       // console.log('UserId', UserId);
  //       // setQuesData1(Object.values(data));

  //       console.log('Data============', uid);

  //       // Object.values(snapshot.val()).map(item => {

  //       //   console.log(item.uid);
  //       // });
  //     } else {
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getUserId();
  // }, []);

  const loginFunc = (Email, Password) => {
    // alert(Email, Password);

    Setloader(true);
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => {
        Setloader(false);
        {
          value == 'Owner'
            ? navigation.replace('BottomTabOwner')
            : navigation.replace('BottomTabUser');
        }
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Setloader(false);
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Setloader(false);
          alert('That email address is invalid!');
        }

        // console.error(error);
        Setloader(false);
        alert(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{margin: '2%'}}>
        <View style={styles.Heading}>
          <Text style={styles.HeadingTxt1}>Welcome !</Text>
          <Text style={styles.HeadingTxt2}>Sign in to continue</Text>
        </View>
        <View>
          <Formik
            initialValues={{
              Email: email,
              Password: password,
            }}
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              loginFunc(values.Email, values.Password);
              // console.warn(values);
              setEmail({
                email: values.Email,
              });
              setpassword({
                password: values.Password,
              });

              // saveData();
            }}
            validationSchema={validation}>
            {formikProps => (
              <>
                <View style={styles.HeadingEmail}>
                  <Text style={styles.smallHeading1}>Email</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Your Email"
                    placeholderTextColor="gray"
                    // onChangeText={Text => setEmail(Text)}
                    // value={email}
                    onChangeText={formikProps.handleChange('Email')}
                    onBlur={formikProps.handleBlur('Email')}
                    style={styles.markerTxin}
                    multiline
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.Email && formikProps.errors.Email}
                  </Text>
                </View>
                <View style={styles.HeadingEmail}>
                  <Text style={{fontSize: 17, color: 'black', top: 10}}>
                    Password
                  </Text>
                </View>

                <View>
                  <TextInput
                    placeholder="Enter Your Password"
                    placeholderTextColor="gray"
                    // onChangeText={Pass => setpassword(Pass)}
                    // value={password}
                    onChangeText={formikProps.handleChange('Password')}
                    onBlur={formikProps.handleBlur('Password')}
                    style={styles.markerTxin}
                    secureTextEntry={true}
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.Password &&
                      formikProps.errors.Password}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgetPassword')}>
                  <Text style={styles.ForgotTxt}>Forgot Password ?</Text>
                </TouchableOpacity>

                <View style={styles.RadioBtnWrapper}>
                  <RadioButton.Group
                    onValueChange={value1 => setValuein(value1)}
                    // status={value === 'first' ? 'checked' : 'unchecked'}
                    value={value}>
                    <RadioButton.Item
                      label="Customer"
                      value="Customer"
                      color={'#1a4499'}
                    />
                  </RadioButton.Group>
                  <RadioButton.Group
                    onValueChange={value1 => setValuein(value1)}
                    // status={value === 'second' ? 'checked' : 'unchecked'}
                    color={'black'}
                    value={value}>
                    <RadioButton.Item
                      label="Hostel Owner"
                      value="Owner"
                      color={'#1a4499'}
                    />
                  </RadioButton.Group>
                </View>

                <View>
                  {/* <TouchableOpacity
                    // onPress={() => navigation.navigate('BottomTabUser')}
                    onPress={formikProps.handleSubmit}
                    style={styles.LoginBtn}>
                    <Text style={styles.LoginBtnTxt}>Login</Text>
                  </TouchableOpacity> */}
                  <View style={styles.BotomWrapper}>
                    <Text
                      style={{
                        color: 'black',
                        alignSelf: 'center',
                        marginTop: '4%',
                      }}>
                      New to Hostel Xpress?
                    </Text>
                    <TouchableOpacity
                      style={styles.BottomSignUp}
                      onPress={() => navigation.navigate('SignUp')}>
                      <Text
                        style={{
                          color: '#304d8b',
                          fontWeight: 'bold',
                          paddingTop: '3%',
                        }}>
                        SignUp
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {value === 'Owner' ? (
                    <TouchableOpacity
                      onPress={() => {
                        formikProps.handleSubmit();
                        // navigation.navigate('BottomTabOwner');
                      }}
                      // onPress={formikProps.handleSubmit}
                      style={styles.LoginBtn}>
                      <Text style={styles.LoginBtnTxt}>Login</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      // onPress={() => navigation.navigate('BottomTabUser')}
                      onPress={formikProps.handleSubmit}
                      style={styles.LoginBtn}>
                      <Text style={styles.LoginBtnTxt}>Login</Text>
                    </TouchableOpacity>
                  )}

                  {/* <TouchableOpacity
                    onPress={() => getValue()}
                    style={styles.AdminBtn}>
                    <Text style={{color: '#304d8b', fontWeight: 'bold'}}>
                      Log
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
      <Modal visible={loader}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'center',
          }}>
          <Image
            source={require('../../Assets/Logo.png')}
            style={{...styles.imgSplash, bottom: '10%'}}
          />
          <ActivityIndicator size="large" color={'#1a4499'} />
          <Text style={styles.txtLoading}>Loading please wait...</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Loginscreen;
