//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from '../../../Components/SearchBar/SearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';
import Theme from '../../Utils/Theme';

// create a component
const UserSaved = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View
          style={{
            padding: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: '#1a4499'}}>Saved Hostels</Text>
          <AntDesign size={20} color={'black'} name={'bells'} />
        </View>

        <SearchBar />

        <Text style={{padding: 25, fontSize: 20, color: 'black'}}>
          Hostel near you
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#d4d4d4',

            margin: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{}}>
              <Image
                style={styles.Logo1}
                source={require('../../../Assets/Flat.jpeg')}
              />
            </View>
            <View style={{paddingStart: Theme.wp('6%')}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text>Marhaba Hostels</Text>
                <View>
                  <FontAwesome
                    name={'star'}
                    size={22}
                    color={'blue'}
                    style={{marginTop: 5, left: Theme.wp('2%')}}
                  />

                  {/* <FontAwesome5
                  name={'star'}
                  size={18}
                  color={'black'}
                  style={{marginTop: 5}}
                /> */}
                </View>
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
                  width: Theme.wp('44%'),
                  alignItems: 'center',
                }}>
                <AntDesign
                  name={'wifi'}
                  size={20}
                  color={'black'}
                  style={{marginTop: 5, marginRight: Theme.wp('3%')}}
                />
                <Ionicons
                  name={'bed-outline'}
                  size={20}
                  color={'black'}
                  style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                />
                <FontAwesome5
                  name={'utensils'}
                  size={15}
                  color={'black'}
                  style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                />
                <FontAwesome
                  name={'bus'}
                  size={15}
                  color={'black'}
                  style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                />
                <Text
                  style={{
                    left: Theme.wp('3%'),
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Rs
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: Theme.wp('47%'),
                  alignItems: 'center',
                }}>
                <Text>Wifi</Text>
                <Text>Bed</Text>
                <Text>Mess</Text>
                <Text>Buss</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    left: Theme.wp('3%'),
                    fontSize: 17,
                  }}>
                  9000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles

//make this component available to the app
export default UserSaved;
