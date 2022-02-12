import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {auth, db} from '../../Utils/Exports';

const Requests = () => {
  const {params} = useRoute();

  console.log('These Params', params);
  const [request, setRequest] = useState([]);
  const item = params?.item;
  useEffect(() => {
    console.log('ITEM====', item);

    const ref = db
      .ref('Booking')
      .child(auth.currentUser.uid)
      .child(item?.HosteliD);

    ref.on('value', snapshot => {
      if (snapshot.val()) {
        console.log('SNAPSHOT===============', Object.values(snapshot.val()));
        setRequest(Object.values(snapshot.val()));
      } else {
        setRequest([]);
      }
    });

    console.log('This Reference ', ref);
  }, []);
  const renderRequests = ({item, index}) => {
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'flex-start',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name:</Text>

          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            {item?.name}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Transaction ID:
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            {item?.transactionId}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Account Name | Mobile Number :
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            {item?.AccountName}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>AmountPaid :</Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            {item?.AmountPaid}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            width: '30%',
            marginTop: '5%',
            justifyContent: 'space-between',
          }}>
          {/* <TouchableOpacity
            onPress={() => {
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: true});
            }}></TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: true});
            }}>
            <Text
              style={{
                fontSize: 16,

                fontWeight: 'bold',
                color: 'green',
              }}>
              Accept
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: false});
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
              Reject
            </Text>
          </TouchableOpacity>
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
