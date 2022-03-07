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
import {auth, db} from '../../Utils/Exports';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';
import {useRoute} from '@react-navigation/native';
import OwnerHomeFlatList from '../../../Components/FlatLists/OwnerHomeFlatList/OwnerHomeFlatList';
// create a component
const OwnerAds = ({navigation}) => {
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
    <View style={styles.container}>
      <View style={{width: '95%', alignSelf: 'center', paddingTop: '5%'}}>
        <OwnerHomeFlatList OwnerHomPg={AddsData} />
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default OwnerAds;
