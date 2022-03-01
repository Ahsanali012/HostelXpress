import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {auth, db} from '../../Utils/Exports';

const Requests = () => {
  const {params} = useRoute();
  const [request, setRequest] = useState([]);
  const [isLiked, setIsLike] = useState(false);
  const [Reject, setreject] = useState(false);
  const item = params?.item;

  const onLikePressed = () => {
    setIsLike(true);
  };

  const onRejectPressed = () => {
    setreject(true);
  };

  useEffect(() => {
    console.log('ITEM', item);
    const ref = db
      .ref('Booking')
      .child(auth.currentUser.uid)
      .child(item?.HosteliD);

    console.log('Checking Booking=========>>>', ref);

    // Yaha Neechay Item.HostelId ki base ker request show kervani ha User ki Abhi har Jaga same jaari

    var a = item?.HosteliD;
    console.log('Checking=====>', item?.HosteliD);

    ref.on('value', snapshot => {
      if (snapshot.val()) {
        console.log('Value Log NEW===>>>>>', snapshot);
        setRequest(Object.values(snapshot.val()));
        // snapshot.forEach(childSnapShot => {
        //   console.log('ChildSnapShot====>', childSnapShot);

        //   let child = childSnapShot.val();
        //   console.log('CHILD ==============', Object.values(child));
        //   setRequest(Object.values(childSnapShot.val()));
        // });
      } else {
        setRequest(null);
        console.log('NO DATA===>>>>>', snapshot);
      }
    });
  }, []);
  const renderRequests = ({item, index}) => {
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'gray', fontSize: 20}}>Name:</Text>
          <Text style={{color: 'black', fontSize: 20}}>
            {' '}
            {''}
            {item?.name}{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20}}>Transaction ID:</Text>
          <Text style={{color: 'black', fontSize: 20}}>
            {' '}
            {item?.transactionId}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20}}> AmountPaid:</Text>
          <Text style={{color: 'black', fontSize: 20}}>
            {' '}
            {item?.AmountPaid}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            width: '40%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              onLikePressed();
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: true});
            }}>
            {isLiked ? (
              <Text style={{fontSize: 20, color: 'green'}}>Accepted</Text>
            ) : (
              <Text style={{fontSize: 20, color: 'green'}}>Accept</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onRejectPressed();
              console.log('id', item?.client);
              const ref = db
                .ref('Request')
                .child(item?.client)
                .child(item?.HosteliD);
              ref.update({accepted: false});
            }}>
            {Reject ? (
              <Text style={{fontSize: 20, color: 'red'}}>Rejected</Text>
            ) : (
              <Text style={{fontSize: 20, color: 'red'}}>Reject</Text>
            )}
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
