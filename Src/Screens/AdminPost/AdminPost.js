import React, {Component, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  TextInput,
} from 'react-native';

import styles from './Style';
import Transaction from './Transaction';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const AdminPost = props => {
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
            flexDirection: 'row',
          }}>
          <View>
            <Image
              style={styles.Logo}
              source={require('../../Assets/Flat.jpeg')}
            />
          </View>
          <View style={{padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Marhaba Hostels</Text>
              <FontAwesome5
                name={'trash'}
                size={18}
                color={'#c51a1a'}
                style={{marginTop: 5, marginRight: 10}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Entypo
                name={'location-pin'}
                size={20}
                color={'black'}
                style={{}}
              />

              <Text>Johar town, Lahore</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 160,
                alignItems: 'center',
              }}>
              <AntDesign
                name={'wifi'}
                size={20}
                color={'black'}
                style={{marginTop: 5, marginRight: 10}}
              />
              <Ionicons
                name={'bed-outline'}
                size={20}
                color={'black'}
                style={{marginTop: 5, marginRight: 10}}
              />
              <FontAwesome5
                name={'utensils'}
                size={15}
                color={'black'}
                style={{marginTop: 5, marginRight: 10}}
              />
              <FontAwesome
                name={'bus'}
                size={15}
                color={'black'}
                style={{marginTop: 5, marginRight: 10}}
              />
              <Text>Rs</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 175,
                alignItems: 'center',
              }}>
              <Text>Wifi</Text>
              <Text>Bed</Text>
              <Text>Mess</Text>
              <Text>Buss</Text>
              <Text style={{fontWeight: 'bold'}}>9000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingTop: 10,
                alignItems: 'center',
                // width: '95%',
              }}>
              <Entypo name={'eye'} size={20} color={'black'} style={{}} />
              <Text>119 views</Text>
              <AntDesign name={'heart'} size={15} color={'red'} style={{}} />
              <Text>119 Likes</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{padding: 30, fontSize: 30, color: '#1a4499'}}>Posts</Text>

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
export default AdminPost;
