//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Utils/Theme';
import {auth, db} from '../../Utils/Exports';
import {useRoute} from '@react-navigation/core';
import openMap from 'react-native-open-maps';
// create a component
const UserHostelDetails = ({navigation}) => {
  const item = useRoute().params.item;

  let Phone = item.phoneNumber;
  console.log('Phoneeee===', Phone);

  console.log('Inside Item ==== ', item);

  // const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  // const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  // const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

  const [longitude, SetLongitude] = useState('');
  const [latitude, Setlatitude] = useState('');

  const getValues = async () => {
    const currentUid = auth.currentUser.uid;
    const ref = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');

    const userLong = [];
    const userLat = [];

    await ref
      .orderByKey()
      .once('value', snapshot => {})
      .then(firstSnapShot => {
        firstSnapShot.forEach(cordSnapshot => {
          const {Longitude, Latitude} = cordSnapshot.val();
          console.log(Longitude, Latitude);

          Setlatitude(Latitude);
          SetLongitude(Longitude);
          console.log('lat Stae', latitude);
          console.log('long Stae', longitude);
        });
      })
      .then(async () => {
        // SetcustomMarkerCords(arraycords);
      });
  };
  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      // phoneNumber = 'tel:${item.phoneNumber}';
      phoneNumber = 'tel:${Phone}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  // console.log('thisssss', Object.values(quesData1));

  useEffect(() => {
    getValues();
  }, []);

  const GoToLocation = () => {
    const lat = parseFloat(latitude); //10.256
    console.log('Map Value', lat);

    const longi = parseFloat(longitude); //10.256
    openMap({latitude: lat, longitude: longi});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{}}>
        <Image style={[styles.Image, {}]} source={{uri: item.Image}} />
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name={'location-pin'}
              size={20}
              color={'black'}
              style={{paddingRight: 5}}
            />
            <Text style={{alignSelf: 'center', fontSize: 20, color: 'black'}}>
              {item.HostelName} {','} {item.location}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            // width: Theme.wp('0%'),
            // paddingLeft: 14,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            // marginTop: 5,
            paddingLeft: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>Description</Text>
          <TouchableOpacity
            onPress={() => GoToLocation()}
            style={{
              width: 100,
              height: 25,
              borderRadius: 2,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'white', marginTop: 5}}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <Text
            style={{
              padding: 10,
              alignItems: 'center',
              fontWeight: '700',
              color: 'gray',
            }}>
            {item.postDesc}
          </Text>
        </View>
        <View style={{marginTop: 10, paddingLeft: 20}}>
          <Text style={{fontSize: 20, color: 'black', paddingTop: '1%'}}>
            {' '}
            Services Available
          </Text>
          <Text style={{color: 'gray'}}>
            * Charges maybe be vary upon selection
          </Text>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 18, color: 'gray'}}>
              Furnished = {item.Furnished}
            </Text>
            <Text style={{fontSize: 18, color: 'gray'}}>
              Internet = {item.Internet}
            </Text>

            <Text style={{fontSize: 18, color: 'gray'}}>
              Mess = {item.Mess}
            </Text>
          </View>
        </View>

        <View style={[styles.spaceBetween1, {marginTop: '2%'}]}>
          <Text style={{color: 'black', fontSize: 20, paddingBottom: '5%'}}>
            Rent Per Month
          </Text>
          <Text style={{color: 'black', fontSize: 20, paddingBottom: '5%'}}>
            {item.Price}
          </Text>
        </View>

        <View style={styles.spaceBetween1}>
          <TouchableOpacity
            onPress={() => {
              dialCall();
            }}
            // activeOpacity={0.7}
            style={{
              width: 100,
              height: 30,
              borderRadius: 5,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'white', marginTop: 5}}>Call Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('UserBooking', {item: item})}
            style={{
              width: 100,
              height: 30,
              borderRadius: 5,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'white', marginTop: 5}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  Image: {
    width: Theme.wp('100%'),
    height: Theme.hp('30%'),

    resizeMode: 'stretch',
    // backgroundColor: 'red',
    borderBottomRightRadius: 30,
  },
  Card: {
    height: Theme.hp('13%'),
    width: 300,
    marginLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  spaceBetween1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  },
  //   settingsText: {
  //     fontSize: 15,
  //     color: DarkTheme.WhiteColor,
  //     marginStart: 15,
  //   },
  //   settingsTextForLight: {
  //     fontSize: 15,
  //     color: Theme.BlackColor,
  //     marginStart: 15,
  //   },
});

//make this component available to the app
export default UserHostelDetails;
