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
import Theme from '../Utils/Theme';
import {auth, db} from '../Utils/Exports';
import UserHomeFlatList from '../../Components/FlatLists/UserHomeFlatList/UserHomeFlatList';
import {useNavigation} from '@react-navigation/native';
import AdminHomeFlatList from '../../Components/FlatLists/AdminHomeFlatList/AdminHomeFlatList';
// create a component
const AdminPost = () => {
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
        setQuesData1(null);
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

  const ref2 = db.ref('Owner/');

  useEffect(() => {
    getValues();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',

            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              marginLeft: 20,
              padding: 10,
            }}>
            Hostels Ads
          </Text>
        </View>

        <AdminHomeFlatList
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
export default AdminPost;
