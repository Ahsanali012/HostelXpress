//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
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
import openMap from 'react-native-open-maps';
// create a component
const UserHostelDetails = ({navigation}) => {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

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
        <Image
          style={[styles.Image, {}]}
          source={require('../../../Assets/Flat1.jpeg')}
        />
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
              D Block Johar Town
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: Theme.wp('82%'),
            // paddingLeft: '5%',
            alignSelf: 'center',
          }}>
          <AntDesign
            name={'wifi'}
            size={20}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
          <Ionicons
            name={'bed-outline'}
            size={20}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
          <FontAwesome5
            name={'utensils'}
            size={15}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
          <FontAwesome
            name={'bus'}
            size={15}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
          <FontAwesome
            name={'car'}
            size={15}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
          <MaterialCommunityIcons
            name={'security'}
            size={15}
            color={'black'}
            style={{marginLeft: Theme.wp('5%')}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            // width: Theme.wp('0%'),
            // paddingLeft: 14,
            alignSelf: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Text>Wifi</Text>
            <Text style={{marginLeft: Theme.wp('5%')}}>Bed</Text>
            <Text style={{marginLeft: Theme.wp('5%')}}>Mess</Text>
            <Text style={{marginLeft: Theme.wp('5%')}}>Buss</Text>
            <Text style={{marginLeft: Theme.wp('5%')}}>Parking</Text>
            <Text style={{marginLeft: Theme.wp('5%')}}>Security</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
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
          <Text style={{padding: 10, alignItems: 'center'}}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying
            ondddddddddddddddddddddddddddd
          </Text>
        </View>
        <View style={{marginTop: 10, paddingLeft: 20}}>
          <Text style={{fontSize: 20, color: 'black'}}>Optional Services:</Text>
          <Text style={{color: 'gray'}}>
            * Charges maybe be vary upon selection
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            width: 320,
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View style={styles.spaceBetween}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                style={{alignSelf: 'center'}}
                value={toggleCheckBox2}
                onValueChange={newValue => setToggleCheckBox2(newValue)}
              />
              <Text>Mess</Text>
            </View>
            <Text>+ 4000 Rs </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            width: 270,
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View style={styles.spaceBetween}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                style={{alignSelf: 'center'}}
                value={toggleCheckBox3}
                onValueChange={newValue => setToggleCheckBox3(newValue)}
              />
              <Text>Transport</Text>
            </View>
            <Text>+ 4000 Rs </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            width: 300,
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View style={styles.spaceBetween}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                style={{alignSelf: 'center'}}
                value={toggleCheckBox1}
                onValueChange={newValue => setToggleCheckBox1(newValue)}
              />
              <Text>Parking</Text>
            </View>
            <Text>+ 4000 Rs </Text>
          </View>
        </View>
        <View style={styles.spaceBetween1}>
          <Text style={{color: 'black', fontSize: 20}}>Rent Per Month</Text>
          <Text style={{color: 'black', fontSize: 20}}>Rs13000</Text>
        </View>
        <View style={styles.spaceBetween1}>
          <TouchableOpacity
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
            onPress={() => navigation.navigate('UserBooking')}
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
    height: 170,
    width: 360,
    borderBottomRightRadius: 40,
  },
  Card: {
    height: 100,
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
    justifyContent: 'space-evenly',
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
