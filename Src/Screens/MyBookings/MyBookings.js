import {StyleSheet, Text, View, FlatList} from 'react-native';

import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Theme from '../Utils/Theme';
import {auth, db} from '../Utils/Exports';
const MyBookings = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    // console.log('ITEM', item);
    const ref = db.ref('Request').child(auth.currentUser.uid);
    ref.on('value', snapshot => {
      if (snapshot.val()) {
        console.log('MY Booking=======>', Object.values(snapshot.val()));
        setBookings(Object.values(snapshot.val()));
      } else {
        setBookings([]);
      }
    });
  }, []);
  const renderRequests = ({item, index}) => {
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text>Hostal Name:</Text>
          <Text>{item?.name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Transaction ID:</Text>
          <Text>{item?.transactionId}</Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 5,
            backgroundColor: Theme.blueBtn,
          }}>
          <Text>{item?.accepted == false ? 'Pending' : 'Accepted'}</Text>
          {/* <Text>Reject</Text> */}
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={bookings} renderItem={renderRequests} />
    </View>
  );
};

export default MyBookings;

const styles = StyleSheet.create({});
