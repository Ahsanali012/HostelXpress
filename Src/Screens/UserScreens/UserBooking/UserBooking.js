//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {auth, db} from '../../Utils/Exports';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// create a component
const UserBooking = () => {
  const item = useRoute().params.item;

  console.log('Item of User booking =======>>', item);
  const [profile, setProfile] = useState({});

  console.log('This Profile === ', profile);
  const [ownerName, setownerName] = useState('');

  const [TId, SetId] = useState('');

  console.log('TransactionId=====', TId);
  const [AmountPaid, SetAmountPaid] = useState('');
  const [AccountName, SetAccountName] = useState('');
  const [BankName, SetBankName] = useState('');
  const [Bankaccount, setBankaccount] = useState('');
  const [Cashaccount, setCashaccount] = useState('');

  const [AllValues, setAllValues] = useState({});
  console.log('AllValues Set ======', AllValues);
  // console.log('Item Came = ', item);

  // var  seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  // console.log(seq);

  useEffect(() => {
    console.log('ITEEEM', item);
    const currentUid = auth.currentUser.uid;
    const ref = db.ref('Owner').child(item?.uid);

    // const refowner = db.ref('Owner/').child('Mvi8eW4x0XIZXjPbEjk');

    // refowner.on('value', snapshot => {
    //   console.warn('SNAPSHOTTTOwner====', snapshot.val());
    //   //  setProfile(snapshot.val());

    //   setAllValues(snapshot.val());
    // });

    ref.on('value', snapshot => {
      console.warn('SNAPSHOTTT', snapshot.val());
      setProfile(snapshot.val());
    });
  }, []);
  const HandleBook = async () => {
    alert('ITEM' + JSON.stringify(profile));
    const ref = db.ref('Booking').child(item?.uid).child(item?.HosteliD);
    const refRequest = db
      .ref('Request')
      .child(auth.currentUser.uid)
      .child(item?.HosteliD);

    ref.child(auth.currentUser.uid).set({
      name: profile.Name,
      transactionId: TId,
      AmountPaid: AmountPaid,
      AccountName: AccountName,
      accepted: false,
      client: auth.currentUser.uid,
      HosteliD: item?.HosteliD,
    });
    refRequest.set({
      name: profile.Name,
      transactionId: TId,
      accepted: false,
      HosteliD: item?.HosteliD,
    });
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={{marginVertical: '10%'}}>
          <Text
            style={{
              fontSize: 30,
              flexDirection: 'row',
              alignSelf: 'center',
              color: '#1c449c',
            }}>
            How booking done ?
          </Text>
          <Text style={{marginTop: 10, fontSize: 17}}>
            Transfer Payment to account and share transaction id for
            confirmation
          </Text>
        </View>
        <View style={styles.Card}>
          <Text style={{padding: 15, fontWeight: 'bold', fontSize: 17}}>
            Account details:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>Name : </Text>
            <Text>{profile?.Name} </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>Bank Name : </Text>
            <Text>{profile?.BankName} </Text>
            {/* <Text>Meezan Bank </Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>Bank Account : </Text>
            {/* <Text>{AllValues?.BankAccount} </Text> */}
            <Text>Ahsan Ali </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>Jazz Cash: </Text>
            {/* <Text>{AllValues?.CashAccount} </Text> */}
            <Text>4455566</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 200,
              alignSelf: 'center',
            }}>
            <Text>Easy Paisa : </Text>
            <Text>2233444 </Text>
            {/* <Text>{AllValues?.CashAccount} </Text> */}
          </View>
        </View>
        <View style={{marginVertical: '10%'}}>
          <Text
            style={{
              fontSize: 24,
              flexDirection: 'row',

              color: '#1c449c',
            }}>
            Enter Details:
          </Text>
          <View style={styles.Inputborder}>
            <TextInput
              placeholder="Enter Transaction ID"
              placeholderTextColor="gray"
              onChangeText={Text => SetId(Text)}
              value={TId}
              style={{width: '100%'}}
              multiline
            />
          </View>
          <View style={styles.Inputborder}>
            <TextInput
              placeholder="Enter Amount Paid"
              placeholderTextColor="gray"
              onChangeText={Text => SetAmountPaid(Text)}
              value={AmountPaid}
              style={{width: '100%'}}
              multiline
            />
          </View>
          <View style={styles.Inputborder}>
            <TextInput
              placeholder="Enter Your Account Name / Mobile Number"
              placeholderTextColor="gray"
              onChangeText={Text => SetAccountName(Text)}
              value={AccountName}
              style={{width: '100%'}}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity onPress={HandleBook} style={styles.BookNowBTN}>
          <Text style={{marginTop: 10, color: 'white'}}>Book Now </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Card: {
    height: 150,
    width: 300,
    marginLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
  },
  Inputborder: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
    marginTop: 20,
  },
  BookNowBTN: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    backgroundColor: '#1c449c',
    alignItems: 'center',
    marginTop: 20,
  },
});

//make this component available to the app
export default UserBooking;
