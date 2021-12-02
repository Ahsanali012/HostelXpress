//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const UserBooking = () => {
  return (
    <View style={styles.container}>
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
            <Text>Ahmad hassan </Text>
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
            <Text>Meezan Bank </Text>
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
            <Text>09863776888 </Text>
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
            <Text>09883444557 </Text>
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
            <Text>09883444557 </Text>
          </View>
        </View>
        <View style={{marginVertical: '10%'}}>
          <Text
            style={{
              fontSize: 30,
              flexDirection: 'row',

              color: '#1c449c',
            }}>
            Transaction Id:
          </Text>
          <View
            style={{
              width: 300,
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'gray',
              alignSelf: 'center',
              backgroundColor: '#D4D4D4',
              marginTop: 20,
            }}></View>
        </View>
        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'gray',
            alignSelf: 'center',
            backgroundColor: '#1c449c',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{marginTop: 10, color: 'white'}}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});

//make this component available to the app
export default UserBooking;
