//import liraries

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';
import {auth, db} from '../../Utils/Exports';
import OwnerHomeFlatList from '../../../Components/FlatLists/OwnerHomeFlatList/OwnerHomeFlatList';
import {useRoute} from '@react-navigation/native';
// create a component
const OwnerHome = ({navigation}) => {
  const [BookingStatus, setBookingStatus] = React.useState(false);
  const [hostelNamee, SethostelNamee] = useState('');
  const [AddsData, SetAddsData] = useState([]);
  const {params} = useRoute();
  const item = params?.item;

  const getValues = async () => {
    const currentUid = auth.currentUser.uid;
    const ref2 = db.ref('Owner/' + currentUid);

    const ref = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');

    await ref.on('value', snapshot => {
      if (snapshot.val()) {
        const data = snapshot.val();

        SetAddsData(Object.values(data));

        console.log('Data--', data);

        // Object.values(snapshot.val()).map(item => {
        //   console.log(item);
        // });
      } else {
        const data = snapshot.val();

        SetAddsData(null);
      }
    });

    await ref2.on('value', snapshot => {
      if (snapshot.val()) {
        // console.log('====>>>>', snapshot);
      } else {
      }
    });

    const hostelName = () => {};
  };
  // console.log('thisssss', Object.values(quesData1));

  useEffect(() => {
    console.log('ITEM', item);
    const ref = db.ref('Booking').child(auth.currentUser.uid);

    // .child(item?.HosteliD);

    console.log('Checking Booking=========>>>', ref);

    alert('Theres a booking Please Check Ads');

    ref.on('value', snapshot => {
      // console.log('Value Log ===>>>>>', snapshot);
      if (snapshot.val()) {
        snapshot.forEach(childSnapShot => {
          let child = childSnapShot.val();
          console.log('CHILD ==============', Object.values(child));
        });
      } else {
        // setRequest([]);
      }
    });
  }, []);

  useEffect(() => {
    getValues();
  }, []);

  return (
    <ScrollView style={styles.container}>
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

        <OwnerHomeFlatList OwnerHomPg={AddsData} hostelName={hostelNamee} />
      </View>
    </ScrollView>
  );
};

// define your styles

//make this component available to the app
export default OwnerHome;
