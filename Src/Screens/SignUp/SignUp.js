//import liraries
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './Style';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {db, auth} from '../Utils/Exports';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [Bankname, setBankname] = useState('');
  console.log('Bank', Bankname);
  const [BankAccount, setBankAccount] = useState('');
  const [CashAccount, setCashAccount] = useState('');
  const [email, setemail] = useState('');
  const [cnic, setcnic] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [value, setValue] = React.useState('');

  console.log('Value===', value);

  const validation = Yup.object().shape({
    Name: Yup.string().required(),
    Email: Yup.string().required(),
    Cnic: Yup.string()
      .min(6, 'Enter min 13 digit')
      .required()
      .max(13, 'Input short digits string'),
    Password: Yup.string()
      .min(6, 'Enter min 6 digit')
      .required()
      .max(8, 'Input short digits string'),

    ConfirmPassword: Yup.string()
      .min(6, 'Enter min 6 digit')
      .required()
      .max(8, 'Input short digits string')
      .required()
      .oneOf([Yup.ref('Password'), null], 'Password must match'),

    BankName: Yup.string(),
    BankAccount: Yup.string(),
    CashAccount: Yup.string(),
  });

  const SignUpFunc = (
    Email,
    Password,
    Name,
    Cnic,
    BankName,
    BankAccount,
    CashAccount,
  ) => {
    // console.log('Name', Name);
    auth
      .createUserWithEmailAndPassword(Email, Password, Name)

      .then(() => {
        alert('Account Created Successfully');
        const currentUid = auth.currentUser.uid;

        {
          value == 'Owner' ? (
            db.ref('Owner/' + currentUid).set({
              Email: Email,
              uid: auth.currentUser.uid,
              Name: Name,
              Cnic: Cnic,
              BankName: BankName,
              BankAccount: BankAccount,
              CashAccount: CashAccount,
            })
          ) : (
            <></>
          );
        }

        {
          value == 'Customer' ? (
            db.ref('Customer/' + currentUid).set({
              Email: Email,
              uid: auth.currentUser.uid,
              Name: Name,
              Cnic: Cnic,
            })
          ) : (
            <></>
          );
        }

        {
          value == 'Admin' ? (
            db.ref('Admin/' + currentUid).set({
              Email: Email,
              uid: auth.currentUser.uid,
              Name: Name,
              Cnic: Cnic,
            })
          ) : (
            <></>
          );
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // Setloader(false);
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          // Setloader(false);
          alert('That email address is invalid!');
        }

        console.error(error);
        // Setloader(false);
        alert(error);
      });
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={{margin: '2%'}}>
        <Formik
          initialValues={{
            Name: name,
            Email: email,
            Cnic: cnic,
            Password: password,
            ConfirmPassword: confirmpassword,
            BankName: Bankname,
            BankAccount: BankAccount,
            CashAccount: CashAccount,
          }}
          onSubmit={(values, {resetForm}) => {
            resetForm();
            SignUpFunc(
              values.Email,
              values.Password,
              values.Name,
              values.Cnic,
              values.BankName,
              values.BankAccount,
              values.CashAccount,
            );
            // console.warn(values);
            setname({
              name: values.Name,
            });
            setemail({
              email: values.Email,
            });
            setcnic({
              cnic: values.Cnic,
            });
            setpassword({
              password: values.Password,
            });
            setconfirmpassword({
              confirmPassword: values.ConfirmPassword,
            });

            setBankname({
              BankName: values.BankName,
            });

            setBankAccount({
              BankAccount: values.BankAccount,
            });

            setCashAccount({
              CashAccount: values.CashAccount,
            });
          }}
          validationSchema={validation}>
          {formikProps => (
            <>
              <View style={styles.Heading}>
                <Text style={styles.HeadingTxt1}>Create Account</Text>
                <Text style={styles.HeadingTxt2}>Sign up to continue</Text>
              </View>
              <View style={{bottom: '3.5%'}}>
                <View style={styles.HeadingEmail}>
                  <Text style={styles.smallHeading1}>Name</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Your Name"
                    placeholderTextColor="gray"
                    onChangeText={formikProps.handleChange('Name')}
                    onBlur={formikProps.handleBlur('Name')}
                    // onChangeText={Text => setname(Text)}
                    // value={name}
                    style={styles.markerTxin}
                    multiline
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.Name && formikProps.errors.Name}
                  </Text>
                </View>

                <View style={styles.HeadingEmail}>
                  <Text style={{fontSize: 17, color: 'black'}}>Email</Text>
                </View>

                <View>
                  <TextInput
                    placeholder="Enter Your Email"
                    placeholderTextColor="gray"
                    // onChangeText={Text => setemail(Text)}
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
                  <Text style={styles.smallHeading1}>Cnic No.</Text>
                </View>

                <View>
                  <TextInput
                    placeholder="Enter Your Cnic"
                    placeholderTextColor="gray"
                    // onChangeText={Text => setcnic(Text)}
                    // value={cnic}
                    onChangeText={formikProps.handleChange('Cnic')}
                    onBlur={formikProps.handleBlur('Cnic')}
                    style={styles.markerTxin}
                    multiline
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.Cnic && formikProps.errors.Cnic}
                  </Text>
                </View>
                <View style={styles.HeadingEmail}>
                  <Text style={styles.smallHeading1}>Password</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Your Password"
                    placeholderTextColor="gray"
                    // onChangeText={Text => setpassword(Text)}
                    // value={password}
                    onChangeText={formikProps.handleChange('Password')}
                    onBlur={formikProps.handleBlur('Password')}
                    style={styles.markerTxin}
                    multiline
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.Password &&
                      formikProps.errors.Password}
                  </Text>
                </View>
                <View style={styles.HeadingEmail}>
                  <Text style={styles.smallHeading1}>Confirm Password</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Your Confirm Password"
                    placeholderTextColor="gray"
                    // onChangeText={Text => setconfirmpassword(Text)}
                    // value={confirmpassword}
                    onChangeText={formikProps.handleChange('ConfirmPassword')}
                    onBlur={formikProps.handleBlur('ConfirmPassword')}
                    style={styles.markerTxin}
                    multiline
                  />
                  <Text style={styles.errorBox}>
                    {formikProps.touched.ConfirmPassword &&
                      formikProps.errors.ConfirmPassword}
                  </Text>

                  {value == 'Owner' ? (
                    <>
                      <View style={styles.HeadingEmail}>
                        <Text style={{fontSize: 17, color: 'black'}}>
                          Bank Name:
                        </Text>
                      </View>
                      <View>
                        <TextInput
                          placeholder="Enter Bank Name"
                          placeholderTextColor="gray"
                          // onChangeText={Text => setBankname(Text)}
                          // value={password}
                          onChangeText={formikProps.handleChange('BankName')}
                          onBlur={formikProps.handleBlur('BankName')}
                          style={styles.markerTxin}
                          multiline
                        />
                        <Text style={styles.errorBox}>
                          {formikProps.touched.BankName &&
                            formikProps.errors.BankName}
                        </Text>
                      </View>

                      <View style={styles.HeadingEmail}>
                        <Text style={{fontSize: 17, color: 'black'}}>
                          Bank Account:
                        </Text>
                      </View>
                      <View>
                        <TextInput
                          placeholder="Enter Bank Account"
                          placeholderTextColor="gray"
                          // onChangeText={Text => setBankname(Text)}
                          // value={password}
                          onChangeText={formikProps.handleChange('BankAccount')}
                          onBlur={formikProps.handleBlur('BankAccount')}
                          style={styles.markerTxin}
                          multiline
                        />
                        <Text style={styles.errorBox}>
                          {formikProps.touched.BankAccount &&
                            formikProps.errors.BankAccount}
                        </Text>
                      </View>
                      <View style={styles.HeadingEmail}>
                        <Text style={{fontSize: 17, color: 'black'}}>
                          Jazzcash or Easypasia Account:
                        </Text>
                      </View>
                      <View>
                        <TextInput
                          placeholder="Enter Jazzcash or Easypasia: "
                          placeholderTextColor="gray"
                          // onChangeText={Text => setBankname(Text)}
                          // value={password}
                          onChangeText={formikProps.handleChange('CashAccount')}
                          onBlur={formikProps.handleBlur('CashAccount')}
                          style={styles.markerTxin}
                          multiline
                        />
                        <Text style={styles.errorBox}>
                          {formikProps.touched.CashAccount &&
                            formikProps.errors.CashAccount}
                        </Text>
                      </View>
                    </>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
              <View style={{bottom: '3%'}}>
                <View style={styles.RadioBtnWrapper}>
                  <RadioButton.Group
                    onValueChange={value => setValue(value)}
                    // status={value === 'first' ? 'checked' : 'unchecked'}
                    value={value}>
                    <RadioButton.Item
                      label="Customer"
                      value="Customer"
                      color={'#1a4499'}
                    />
                  </RadioButton.Group>
                  <RadioButton.Group
                    onValueChange={value => setValue(value)}
                    // status={value === 'second' ? 'checked' : 'unchecked'}
                    color={'black'}
                    value={value}>
                    <RadioButton.Item
                      label="Hostel Owner"
                      value="Owner"
                      color={'#1a4499'}
                    />
                  </RadioButton.Group>
                  <RadioButton.Group
                    onValueChange={value => setValue(value)}
                    // status={value === 'second' ? 'checked' : 'unchecked'}
                    color={'black'}
                    value={value}>
                    <RadioButton.Item
                      label="Admin"
                      value="Admin"
                      color={'#1a4499'}
                    />
                  </RadioButton.Group>
                </View>
              </View>
              <View style={{}}>
                <View
                  style={{
                    bottom: '35%',
                    paddingHorizontal: '1%',
                  }}>
                  <TouchableOpacity
                    style={styles.LoginBtn}
                    onPress={formikProps.handleSubmit}>
                    <Text style={styles.LoginBtnTxt}>Register</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.BotomWrapper}>
                  <Text
                    style={{
                      color: 'black',
                      alignSelf: 'center',
                      marginTop: '3.5%',
                    }}>
                    Already registered?
                  </Text>

                  <TouchableOpacity
                    style={styles.BottomSignUp}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: '#304d8b', fontWeight: 'bold'}}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
