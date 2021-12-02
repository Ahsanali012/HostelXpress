//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';
// create a component
const ForgetPassword = ({}) => {
  const [Email, setEmail] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ForgetTxt}>Forgot Password ?</Text>
      </View>
      <View style={{width: '70%'}}>
        <Text style={{fontSize: 16, color: '#1a4499'}}>
          Enter Your registered email below to recieve password reset
          instructions
        </Text>
      </View>
      <View style={{width: '90%'}}>
        <View style={styles.HeadingEmail}>
          <Text style={styles.smallHeading1}>Email</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Recover')}
          style={styles.LoginBtn}>
          <Text style={styles.LoginBtnTxt}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.LoginBtn1}>
          <Text style={styles.LoginBtnTxt1}>Login instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default ForgetPassword;
