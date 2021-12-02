//import liraries
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Style';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../Navigations/BottomTabs';
const LoginAdmin = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{margin: '2%'}}>
        <View style={styles.Heading}>
          <Text style={styles.HeadingTxt1}>Admin Login </Text>
          <Text style={styles.HeadingTxt2}>Sign in to continue</Text>
        </View>
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
        <View style={styles.HeadingEmail}>
          <Text style={{fontSize: 17, color: 'black', top: 10}}>Password</Text>
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

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomTab')}
            style={styles.LoginBtn}>
            <Text style={styles.LoginBtnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginAdmin;
