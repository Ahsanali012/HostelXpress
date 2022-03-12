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
      console.log('Item Coming======', item),
      (
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Hostal Name:</Text>
            <Text style={{paddingLeft: 10, fontSize: 20}}>
              {item?.hostelName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Transaction ID:</Text>
            <Text style={{fontSize: 20, paddingLeft: 10}}>
              {item?.transactionId}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Room Quanitity:</Text>
            <Text style={{paddingLeft: 10, fontSize: 20}}>
              {item?.quantity}
            </Text>
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
      )
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
