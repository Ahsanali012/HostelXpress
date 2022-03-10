//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Image,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {auth, db} from '../../Utils/Exports';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';
import Theme from '../../Utils/Theme';
import {useRoute} from '@react-navigation/core';
// create a component
const OwnerPost = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');

  const [BookingStatus, SetBookingStatus] = React.useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const [price, Setprice] = React.useState('');
  const [location, Setlocation] = React.useState('');
  const [phoneNumber, SetphoneNumber] = React.useState('');
  const [hostelName, Sethostelname] = React.useState('');
  const [postDesc, SetpostDesc] = React.useState('');
  const [types, setType] = useState('');
  const [img, SetImg] = useState('');
  // const [Id, SetId] = useState(0);

  // const index = useRoute().params.index;
  // console.log('Value coming from Edit====>', index);

  // var obj = index;
  // var string = JSON.stringify(obj);
  // console.log('String Of Post==>', string);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 400,
      cropping: true,
      // includeBase64: true,
    }).then(image => {
      console.log(image);
      SetImg(image.path);
      // setType(image.mime);
      setType({type: 'image/jpg'});
    });
  };
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const uploadImage = async () => {
    const uploadUri = img;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(filename);
    const task = storageRef.putFile(uploadUri);

    task.on('state_changed', snapshot => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 1000;
      if (progress == 1000) {
      }
    });

    try {
      await task;
      console.warn('Post uploaded');
      const url = await storageRef.getDownloadURL();
      SetImg(null);
      console.log('======URL==========>', url);
      return url;
    } catch (e) {
      console.log(e);

      return null;
    }
  };
  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    const currentUid = auth.currentUser.uid;

    const ref = db.ref('Owner/').child('/OwnerPostAdd');
    const refkey = db.ref('Owner/').child('/OwnerPostAdd').push().key;
    const ref2 = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');

    const refkey2 = db
      .ref('Owner/' + currentUid)
      .child('/OwnerPostAdd')
      .push().key;

    // const refUpdate = db.ref('Owner/').child('/OwnerPostAdd').child(string);

    // refUpdate.update({
    //   Image: imgUrl,
    //   postDesc: postDesc,
    //   location: location,
    //   Price: price,
    //   HostelName: hostelName,
    //   phoneNumber: phoneNumber,
    //   Furnished: value2,
    //   Mess: value3,
    //   Internet: value4,
    //   Latitude: currentLatitude,
    //   Longitude: currentLongitude,
    //   uid: currentUid,
    //   BookingStatus: BookingStatus,
    //   HosteliD: refkey2,
    // });

    ref.once('value', snapshot => {
      if (snapshot.val()) {
        let newPost = [];
        newPost = Object.values(snapshot.val());
        newPost.push({
          Image: imgUrl,
          postDesc: postDesc,
          location: location,
          Price: price,
          HostelName: hostelName,
          phoneNumber: phoneNumber,
          Furnished: value2,
          Mess: value3,
          Internet: value4,
          Latitude: currentLatitude,
          Longitude: currentLongitude,
          uid: currentUid,
          BookingStatus: BookingStatus,
          HosteliD: refkey2,
        });
        ref.set(newPost);
      } else {
        ref.child(refkey2).set({
          Image: imgUrl,
          postDesc: postDesc,
          location: location,
          Price: price,
          HostelName: hostelName,
          phoneNumber: phoneNumber,
          Furnished: value2,
          Mess: value3,
          Internet: value4,
          Latitude: currentLatitude,
          Longitude: currentLongitude,
          uid: currentUid,
          BookingStatus: BookingStatus,
          HosteliD: refkey2,
        });
      }
    });

    ref2.once('value', snapshot => {
      if (snapshot.val()) {
        let newPost = [];
        newPost = Object.values(snapshot.val());
        newPost.push({
          Image: imgUrl,
          postDesc: postDesc,
          location: location,
          Price: price,
          HostelName: hostelName,
          phoneNumber: phoneNumber,
          Furnished: value2,
          Mess: value3,
          Internet: value4,
          Latitude: currentLatitude,
          Longitude: currentLongitude,
          uid: currentUid,
          BookingStatus: BookingStatus,
          HosteliD: refkey2,
        });
        ref2.set(newPost);
      } else {
        ref2.child(refkey2).set({
          Image: imgUrl,
          postDesc: postDesc,
          location: location,
          Price: price,
          HostelName: hostelName,
          phoneNumber: phoneNumber,
          Furnished: value2,
          Mess: value3,
          Internet: value4,
          Latitude: currentLatitude,
          Longitude: currentLongitude,
          uid: currentUid,
          BookingStatus: BookingStatus,
          HosteliD: refkey2,
        });
      }
    });
  };

  const UpdateSpecificPost = async () => {
    let imgUrl = await uploadImage();
    const currentUid = auth.currentUser.uid;
    const refkey2 = db
      .ref('Owner/' + currentUid)
      .child('/OwnerPostAdd')
      .push().key;

    const refUpdate = await db
      .ref('Owner/')
      .child('/OwnerPostAdd')
      .child(string);

    refUpdate.update({
      Image: imgUrl,
      postDesc: postDesc,
      location: location,
      Price: price,
      HostelName: hostelName,
      phoneNumber: phoneNumber,
      Furnished: value2,
      Mess: value3,
      Internet: value4,
      Latitude: currentLatitude,
      Longitude: currentLongitude,
      uid: currentUid,
      BookingStatus: BookingStatus,
      HosteliD: refkey2,
    });
  };

  const handleLocationPermission = async () => {
    let permissionCheck = '';

    if (Platform.OS === 'android') {
      permissionCheck = await PermissionsAndroid.request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.warn('Location permission granted.')
          : console.warn('Location perrmission denied.');
      }
    }
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          width: '95%',
          alignSelf: 'center',
        }}>
        {/* <Text style={{fontSize: 25, color: '#1a4499', padding: 15}}>
          Post Ad detail
        </Text> */}
        <TouchableOpacity
          onPress={() => pickPicture()}
          style={{
            height: 100,
            width: 290,

            borderRadius: 10,
            borderColor: '#1a4499',
            borderWidth: 1,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          {img === '' || img == null ? (
            <>
              <View
                style={{
                  paddingVertical: '1%',
                  alignItems: 'center',
                  marginTop: 25,
                }}>
                <AntDesign name={'pluscircleo'} size={20} color={'#1a4499'} />
                <Text style={{marginTop: 10, color: '#1a4499'}}>
                  Add images
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={{alignSelf: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.imgEdit}
                  source={{
                    uri: img,
                  }}
                />
              </View>
            </>
          )}
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            fontWeight: '600',
            fontSize: 20,
            paddingLeft: 30,
            color: '#1c449c',
          }}>
          Post Description :
        </Text>
        <TextInput
          onChangeText={Text => SetpostDesc(Text)}
          value={postDesc}
          multiline={true}
          maxLength={100}
          numberOfLines={3}
          placeholder="Post Description"
          style={{
            width: Theme.wp('84%'),

            alignSelf: 'center',
            textAlignVertical: 'top',
            marginTop: 2,
          }}
        />

        <View style={{marginVertical: '2%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{}}>
              <Text
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  color: '#1c449c',
                  fontWeight: '600',
                  fontSize: 20,
                  // paddingBottom: 2,
                }}>
                Price:
              </Text>
              <TextInput
                onChangeText={Text => Setprice(Text)}
                placeholder="Price"
                value={price}
                style={{
                  width: 100,
                  height: 40,
                  // marginLeft: 10,
                  alignSelf: 'flex-start',
                  // backgroundColor: '#D4D4D4',
                  marginTop: 2,
                }}
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  flexDirection: 'row',
                  paddingLeft: 30,
                  color: '#1c449c',
                  fontWeight: '600',
                  fontSize: 20,
                  // paddingBottom: 2,
                }}>
                Location:
              </Text>
              <TextInput
                onChangeText={Text => Setlocation(Text)}
                placeholder="Location"
                value={location}
                style={{
                  width: 150,
                  height: 40,
                  marginLeft: 20,
                  alignSelf: 'flex-start',
                  // backgroundColor: '#D4D4D4',
                  marginTop: 2,
                }}
              />
            </View>
          </View>

          <View style={{}}>
            <Text
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
                color: '#1c449c',
                fontWeight: '600',
                fontSize: 20,
                // paddingBottom: 2,
              }}>
              Phone Number:
            </Text>

            <TextInput
              onChangeText={Text => SetphoneNumber(Text)}
              placeholder="Phone Number"
              value={phoneNumber}
              style={{
                width: Theme.wp('85%'),
                height: 40,
                marginLeft: 20,
                alignSelf: 'flex-start',
                // backgroundColor: '#D4D4D4',
                marginTop: 2,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
              color: '#1c449c',
              fontWeight: '600',
              fontSize: 20,
              // paddingBottom: 2,
            }}>
            Hostel Name:
          </Text>

          <TextInput
            onChangeText={Text => Sethostelname(Text)}
            placeholder="Hostel Name"
            value={hostelName}
            style={{
              width: Theme.wp('85%'),
              height: 40,
              marginLeft: 20,
              alignSelf: 'flex-start',
              // backgroundColor: '#D4D4D4',
              marginTop: 2,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <Text
            style={{
              paddingLeft: 30,
              // paddingTop: 10,
              color: '#1c449c',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Furnished :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View style={styles.RadioBtnWrapper}>
              <RadioButton.Group
                onValueChange={value1 => setValue2(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value2}>
                <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
              </RadioButton.Group>
              <RadioButton.Group
                onValueChange={value1 => setValue2(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value2}>
                <RadioButton.Item label="No" value="No" color={'#1a4499'} />
              </RadioButton.Group>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              paddingLeft: 30,

              color: '#1c449c',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Mess:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={[styles.RadioBtnWrapper, {paddingLeft: Theme.wp('11%')}]}>
              <RadioButton.Group
                onValueChange={value1 => setValue3(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value3}>
                <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
              </RadioButton.Group>
              <RadioButton.Group
                onValueChange={value1 => setValue3(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value3}>
                <RadioButton.Item label="No" value="No" color={'#1a4499'} />
              </RadioButton.Group>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              paddingLeft: 30,

              color: '#1c449c',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Internet:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={[styles.RadioBtnWrapper, {paddingLeft: Theme.wp('5%')}]}>
              <RadioButton.Group
                onValueChange={value1 => setValue4(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value4}>
                <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
              </RadioButton.Group>
              <RadioButton.Group
                onValueChange={value1 => setValue4(value1)}
                // status={value === 'first' ? 'checked' : 'unchecked'}
                value={value4}>
                <RadioButton.Item label="No" value="No" color={'#1a4499'} />
              </RadioButton.Group>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleUpdate();
            uploadImage();
            getOneTimeLocation();
            // SetId(Id + 1);
          }}
          style={{
            width: Theme.wp('80%'),
            height: '10%',
            backgroundColor: '#1a4499',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
            bottom: 5,
          }}>
          <Text style={{color: 'white', fontSize: 17, paddingTop: 10}}>
            Post Your Ad
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            UpdateSpecificPost();
          }}
          style={{
            width: Theme.wp('80%'),
            height: '10%',
            backgroundColor: '#1a4499',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
            bottom: 5,
          }}>
          <Text style={{color: 'white', fontSize: 17, paddingTop: 10}}>
            Update Ad
          </Text>
        </TouchableOpacity> */}
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  RadioBtnWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    alignSelf: 'center',
  },
  imgEdit: {
    height: Theme.hp('13.5%'),
    width: Theme.wp('80.9%'),
    resizeMode: 'cover',
    // marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',

    alignSelf: 'center',
  },
});

//make this component available to the app
export default OwnerPost;
