//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// create a component
const AdminProfile = () => {
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
          <View>
            <Image
              style={styles.Logo}
              source={require('../../Assets/adminPic.jpeg')}
            />
          </View>
        </View>
        <View style={styles.Card}>
          <Text style={{padding: 15, fontWeight: 'bold'}}>Bio:</Text>
          <Text style={{paddingLeft: 20}}>
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
                paddingLeft: 20,
              }}>
              <TouchableOpacity style={{marginTop: 7}}>
                <Entypo style={{}} name="log-out" size={24} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 7, paddingLeft: 15}}>
                <Text>LogOut</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{}}>
              <AntDesign style={{}} name="right" size={24} color={'gray'} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBorder}></View>
        </View>
      </View>
    </View>
  );
};

export default AdminProfile;
