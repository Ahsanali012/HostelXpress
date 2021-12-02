//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const RecoverEmail = () => {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor={'#1a4499'} />
      </View>
      <View style={{paddingBottom: '30%'}}>
        <MaterialCommunityIcons
          size={100}
          color={'white'}
          name="email-send-outline"
          style={{alignSelf: 'center'}}
        />
        <View style={{alignItems: 'center', padding: 15}}>
          <Text style={{color: 'white'}}>
            We have sent a password recovery instruction to your email
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a4499',
  },
});

//make this component available to the app
export default RecoverEmail;
