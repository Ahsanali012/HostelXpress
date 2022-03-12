//import liraries

import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {auth, db} from '../../Utils/Exports';
import {firebase} from '@react-native-firebase/database';
import React, {Component, useState, useEffect} from 'react';

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
import {useNavigation} from '@react-navigation/native';
// create a component
const UserProfile = () => {
  const navigation = useNavigation();
  const [loggedIn, SetloggedIn] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        SetloggedIn(true);
      } else {
        SetloggedIn(false);
      }
    });
  }, []);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{width: '95%'}}>
        <Text style={{padding: 30, fontSize: 30, color: '#1a4499'}}>
          Profile
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{paddingLeft: 10}}>
            <View style={{}}>
              <Text style={{fontSize: 25}}>Aslam Khan</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign
                name={'mail'}
                size={20}
                color={'black'}
                style={{marginTop: 7, marginRight: 5}}
              />
              <Text style={{marginTop: 7}}>Aslam@gmail.com</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather
                name={'phone-call'}
                size={20}
                color={'black'}
                style={{marginTop: 7, marginRight: 5}}
              />
              <Text style={{marginTop: 7}}>+92 40989933</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.Logo}
              source={require('../../../Assets/adminPic.png')}
            />
          </View>
        </View>
        <View style={styles.Card}>
          <Text style={{padding: 15, fontWeight: 'bold'}}>Bio:</Text>
          <Text style={{paddingLeft: 20, alignSelf: 'center'}}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used as a placeholder before
            final copy is available
          </Text>
        </View>
        <View>
          <View style={styles.bottomBorder}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <TouchableOpacity style={{marginTop: 7}}>
                <Feather style={{}} name="settings" size={24} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 7, paddingLeft: 15}}>
                <Text>Settings</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{}}>
              <AntDesign style={{}} name="right" size={24} color={'gray'} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBorder}></View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              signOut();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginTop: 7,
                flexDirection: 'row',
              }}>
              <Entypo
                style={{paddingRight: 15}}
                name="log-out"
                size={24}
                color={'black'}
              />

              <Text>LogOut</Text>
            </View>
            <View>
              <AntDesign style={{}} name="right" size={24} color={'gray'} />
            </View>
          </TouchableOpacity>

          <View style={styles.bottomBorder}></View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
