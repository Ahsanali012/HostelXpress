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
import SearchBar from '../../../Components/SearchBar/SearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';
import Theme from '../../Utils/Theme';
import {auth, db} from '../../Utils/Exports';
import UserHomeFlatList from '../../../Components/FlatLists/UserHomeFlatList/UserHomeFlatList';
import {useNavigation} from '@react-navigation/native';
// create a component
const UserHome = () => {
  const navigation = useNavigation();
  const [hostelNamee, SethostelNamee] = useState('');
  const [isLiked, setIsLike] = useState(false);
  const onLikePressed = () => {
    setIsLike(!isLiked);
  };

  const [quesData1, setQuesData1] = useState([]);

  const getValues = async () => {
    const currentUid = auth.currentUser.uid;
    const ref = db.ref('Owner/').child('/OwnerPostAdd');

    const ref2 = db.ref('Owner/');

    await ref.on('value', snapshot => {
      if (snapshot.val()) {
        const data = snapshot.val();

        setQuesData1(Object.values(data));

        console.log('Data--', data);

        // Object.values(snapshot.val()).map(item => {
        //   console.log(item);
        // });
      } else {
      }
    });

    await ref2
      .orderByKey()
      .once('value', snapshot => {})
      .then(firstSnapShot => {
        firstSnapShot.forEach(cordSnapshot => {
          const {HostelName} = cordSnapshot.val();
          console.log('Here=====', HostelName);
          SethostelNamee(HostelName);
        });
      })
      .then(async () => {
        // SetcustomMarkerCords(arraycords);
      });
  };

  useEffect(() => {
    // console.log('ITEM', item);
    const ref = db.ref('Request').child(auth.currentUser.uid);
    ref.on('value', snapshot => {
      if (snapshot.val()) {
        console.log('MY Booking=======>', Object.values(snapshot.val()));
        alert(
          'Dear Customer Please Check Your Booking Status in My Booking Section',
        );
        // setBookings(Object.values(snapshot.val()));
      } else {
        // setBookings([]);
      }
    });
  }, []);

  useEffect(() => {
    getValues();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            padding: 40,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: '#1a4499'}}>Welcome Back !</Text>
          <AntDesign size={20} color={'black'} name={'bells'} />
        </View>
        <View style={{}}>
          <SearchBar />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginBottom: '15%',

              marginLeft: '5%',
              fontSize: 20,
            }}>
            Discover hostels
          </Text>
          <Text style={{color: 'gray', marginBottom: '15%', marginRight: '5%'}}>
            View all
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: Theme.wp('3%'),
          }}>
          <Image
            style={[styles.Logo, {paddingRight: 20, width: 100}]}
            source={require('../../../Assets/Flat2.jpeg')}
          />

          <Image
            style={[styles.Logo, {padding: 20, width: 100}]}
            source={require('../../../Assets/Flat1.jpeg')}
          />
          <Image
            style={[styles.Logo, {padding: 20, width: 100}]}
            source={require('../../../Assets/Flat3.jpeg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300,
            alignSelf: 'center',
          }}>
          <Text>Prime hostel</Text>
          <Text>Hamid hostel</Text>
          <Text>Royal hostel</Text>
        </View>

        <Text
          style={{
            paddingTop: 25,
            paddingLeft: 20,
            fontSize: 20,
            color: 'black',
          }}>
          Hostel near you
        </Text>
        <UserHomeFlatList
          UserHomPg={quesData1}
          hostelName={hostelNamee}
          // Onpress={() => navigation.navigate('HostelDetail')}
        />
      </View>
    </ScrollView>
  );
};

// define your styles

//make this component available to the app
export default UserHome;
