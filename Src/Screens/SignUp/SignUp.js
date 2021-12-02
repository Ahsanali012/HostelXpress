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
const SignUp = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Cnic, setCnic] = useState('');
  const [Password, setPassword] = useState('');
  const [value, setValue] = React.useState('');

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={{margin: '2%'}}>
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
              onChangeText={Text => setName(Text)}
              value={Name}
              style={styles.markerTxin}
              multiline
            />
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
              onChangeText={Pass => setPassword(Pass)}
              value={Password}
              style={styles.markerTxin}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.HeadingEmail}>
            <Text style={styles.smallHeading1}>Cnic No.</Text>
          </View>
          <View>
            <TextInput
              placeholder="Enter Your Cnic"
              placeholderTextColor="gray"
              onChangeText={Text => setCnic(Text)}
              value={Cnic}
              style={styles.markerTxin}
              multiline
            />
          </View>
          <View style={styles.HeadingEmail}>
            <Text style={styles.smallHeading1}>Password</Text>
          </View>
          <View>
            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor="gray"
              onChangeText={Text => setPassword(Text)}
              value={Password}
              style={styles.markerTxin}
              multiline
            />
          </View>
          <View style={styles.HeadingEmail}>
            <Text style={styles.smallHeading1}>Confirm Password</Text>
          </View>
          <View>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="gray"
              onChangeText={Text => setEmail(Text)}
              value={Email}
              style={styles.markerTxin}
              multiline
            />
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
                value="Cutomer"
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
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              bottom: '35%',
              paddingHorizontal: '1%',
            }}>
            <TouchableOpacity style={styles.LoginBtn}>
              <Text style={styles.LoginBtnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BotomWrapper}>
            <Text
              style={{color: 'black', alignSelf: 'center', marginTop: '3.5%'}}>
              Already registered?
            </Text>
            <TouchableOpacity
              style={styles.BottomSignUp}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#304d8b', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
