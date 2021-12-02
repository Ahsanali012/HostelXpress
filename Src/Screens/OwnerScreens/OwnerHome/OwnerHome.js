//import liraries

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';
// create a component
const OwnerHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <View
          style={{
            padding: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: '#1a4499'}}>Welcome Back !</Text>
          <AntDesign size={20} color={'black'} name={'bells'} />
        </View>
        <Text style={{fontSize: 25, color: 'black', paddingLeft: 30}}>
          DashBoard
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View style={{padding: 10}}>
              <Text style={{color: 'black', fontSize: 16, paddingRight: 10}}>
                Your Profile Views
              </Text>
              <Text style={{color: '#1a4499', fontSize: 20}}>104 Views</Text>
            </View>
            <View
              style={{
                borderLeftWidth: 2,
                alignSelf: 'center',
                borderColor: 'gray',
                paddingLeft: 20,
              }}>
              <Text style={{color: 'black', fontSize: 16}}>Published Adds</Text>
              <Text style={{color: '#1a4499', fontSize: 20}}>8 Ads</Text>
            </View>
          </View>
        </View>

        <Text
          style={{padding: 10, fontSize: 20, paddingLeft: 30, color: 'black'}}>
          Recent Adds
        </Text>
        <View
          //   onPress={() => navigation.navigate('HostelDetail')}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            paddingBottom: 10,
            margin: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={styles.Logo1}
                source={require('../../../Assets/Flat.jpeg')}
              />
            </View>
            <View style={{paddingStart: '3.5%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={{paddingLeft: 5}}>Marhaba Hostels</Text>
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
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            paddingBottom: 10,
            margin: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={styles.Logo1}
                source={require('../../../Assets/Flat.jpeg')}
              />
            </View>
            <View style={{paddingStart: '3.5%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={{paddingLeft: 5}}>Marhaba Hostels</Text>
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
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default OwnerHome;
