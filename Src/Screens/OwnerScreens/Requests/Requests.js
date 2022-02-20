import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {auth, db} from '../../Utils/Exports';

const Requests = () => {
  const {params} = useRoute();
  const [request, setRequest] = useState([]);
  const item = params?.item;

  useEffect(() => {
    console.log('ITEM', item);
    const ref = db.ref('Booking').child(auth.currentUser.uid);

    // .child(item?.HosteliD);

    console.log('Checking Booking=========>>>', ref);

    ref.on('value', snapshot => {
      // console.log('Value Log ===>>>>>', snapshot);
      if (snapshot.val()) {
        snapshot.forEach(childSnapShot => {
          let child = childSnapShot.val();
          console.log('CHILD ===========', Object.values(child));
          setRequest(Object.values(childSnapShot.val()));
        });
      } else {
        setRequest([]);
      }
    });
  }, []);
  const renderRequests = ({item, index}) => {
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>Name:</Text>
          <Text style={{color: 'black'}}>{item?.name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Transaction ID:</Text>
          <Text>{item?.transactionId}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            width: '30%',
            justifyContent: 'space-between',
          }}>
          <Text
            onPress={() => {
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: true});
            }}>
            Accept
          </Text>
          <Text
            onPress={() => {
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: false});
            }}>
            Reject
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={request} renderItem={renderRequests} />
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({});
