//import liraries
import React, {Component, useState} from 'react';
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
// create a component
const OwnerPost = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [price, Setprice] = React.useState('');
  const [types, setType] = useState('');
  const [img, SetImg] = useState('');

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
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress == 100) {
      }
      //  console.log('image uploaded')
    });

    try {
      await task;
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
    const ref = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');
    const refkey = db
      .ref('Owner/' + currentUid)
      .child('/OwnerPostAdd')
      .push().key;

    ref.child(refkey).set({
      Image: imgUrl,
      Price: price,
      Persons: value,
      Furnished: value2,
      Mess: value3,
      Internet: value4,
      Latitude: currentLatitude,
      Longitude: currentLongitude,
    });

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
    // await ref.set({
    //   Image: img,
    // });
    // console.log('Stored=========>', img);
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          width: '95%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#1a4499', padding: 15}}>
          Post a new add
        </Text>
        <TouchableOpacity
          onPress={() => pickPicture()}
          style={{
            height: 140,
            width: 300,
            marginLeft: 15,
            borderRadius: 10,
            borderColor: '#1a4499',
            borderWidth: 1,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          {img === '' || img == null ? (
            <>
              <View style={{paddingVertical: '15%', alignItems: 'center'}}>
                <AntDesign name={'pluscircleo'} size={30} color={'#1a4499'} />
                <Text style={{marginTop: 5, color: '#1a4499'}}>Add images</Text>
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
        <View style={{marginVertical: '2%'}}>
          <Text
            style={{
              fontSize: 30,
              flexDirection: 'row',
              paddingLeft: 30,
              color: '#1c449c',
              // paddingBottom: 2,
            }}>
            Price:
          </Text>
          <TextInput
            onChangeText={Text => Setprice(Text)}
            value={price}
            style={{
              width: 300,
              height: 40,

              alignSelf: 'center',
              // backgroundColor: '#D4D4D4',
              marginTop: 2,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 30,
          }}>
          Persons:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingBottom: 3,
          }}>
          <View style={styles.RadioBtnWrapper}>
            <RadioButton.Group
              onValueChange={value1 => setValue(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value}>
              <RadioButton.Item
                label="single"
                value="Single"
                color={'#1a4499'}
              />
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={value1 => setValue(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value}>
              <RadioButton.Item
                label="Double"
                value="Double"
                color={'#1a4499'}
              />
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={value1 => setValue(value1)}
              // status={value === 'second' ? 'checked' : 'unchecked'}
              color={'black'}
              value={value}>
              <RadioButton.Item
                label="Triple"
                value="Triple"
                color={'#1a4499'}
              />
            </RadioButton.Group>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: 30,
            // paddingTop: 10,
            color: 'black',
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
        <Text
          style={{
            paddingLeft: 30,

            color: 'black',
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
          <View style={styles.RadioBtnWrapper}>
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

        <Text
          style={{
            paddingLeft: 30,

            color: 'black',
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
          <View style={styles.RadioBtnWrapper}>
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

        <TouchableOpacity
          onPress={() => {
            handleUpdate();
            uploadImage();
            getOneTimeLocation();
          }}
          style={{
            width: Theme.wp('80%'),
            height: 40,
            backgroundColor: '#1a4499',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text style={{color: 'white', fontSize: 17, paddingTop: 10}}>
            Post
          </Text>
        </TouchableOpacity>
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
    height: Theme.hp('19.5%'),
    width: Theme.wp('82.9%'),
    resizeMode: 'cover',
    // marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',

    alignSelf: 'center',
  },
});

//make this component available to the app
export default OwnerPost;
