import React, {Component, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';

import styles from './Style';
import Transaction from './Transaction';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const AdminUser = props => {
  const navigation = useNavigation();
  const renderFlatlist = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#d4d4d4',

          margin: 20,
        }}>
        <View
          style={{
            paddingTop: 10,
            paddingLeft: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25}}>Aslam Khan</Text>
          <TouchableOpacity>
            <FontAwesome5
              name={'trash'}
              size={20}
              color={'#c51a1a'}
              style={{marginTop: 5, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{paddingLeft: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* <Text style={{marginTop: 7}}>Yoo </Text> */}
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5
                name={'building'}
                size={20}
                color={'black'}
                style={{marginTop: 7, marginRight: 5}}
              />
              <Text style={{marginTop: 7}}>Hostel Owner</Text>
            </View>
          </View>
          <View style={{}}>
            <Image
              style={styles.Logo}
              source={require('../../Assets/admin.jpeg')}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{padding: 30, fontSize: 30, color: '#1a4499'}}>Users</Text>

      <FlatList
        data={Transaction}
        renderItem={renderFlatlist}
        scrollEnabled
        inverted
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default AdminUser;
