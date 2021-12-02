//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// create a component
const OwnerPost = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          width: '95%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#1a4499', padding: 30}}>
          Post a new add
        </Text>
        <TouchableOpacity
          style={{
            height: 140,
            width: 300,
            marginLeft: 15,
            borderRadius: 10,
            borderColor: '#1a4499',
            borderWidth: 1,
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{paddingVertical: '15%', alignItems: 'center'}}>
            <AntDesign name={'pluscircleo'} size={30} color={'#1a4499'} />
            <Text style={{marginTop: 5, color: '#1a4499'}}>Add images</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginVertical: '2%'}}>
          <Text
            style={{
              fontSize: 30,
              flexDirection: 'row',
              paddingLeft: 30,
              color: '#1c449c',
              paddingBottom: 4,
            }}>
            Price:
          </Text>
          <TextInput
            style={{
              width: 300,
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'gray',
              alignSelf: 'center',
              // backgroundColor: '#D4D4D4',
              marginTop: 5,
            }}
          />
        </View>
        <Text
          style={{
            paddingLeft: 30,
            paddingTop: 10,
            color: 'black',
            fontSize: 18,
            fontWeight: '700',
          }}>
          Furnished :
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={styles.RadioBtnWrapper}>
            <RadioButton.Group
              onValueChange={value1 => setValue2(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value2}>
              <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={value1 => setValue2(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value2}>
              <RadioButton.Item label="No" value="No" color={'#1a4499'} />
            </RadioButton.Group>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: 30,

            color: 'black',
            fontSize: 18,
            fontWeight: '700',
          }}>
          Mess:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={styles.RadioBtnWrapper}>
            <RadioButton.Group
              onValueChange={value1 => setValue3(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value3}>
              <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={value1 => setValue3(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value3}>
              <RadioButton.Item label="No" value="No" color={'#1a4499'} />
            </RadioButton.Group>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: 30,

            color: 'black',
            fontSize: 18,
            fontWeight: '700',
          }}>
          Electricity :
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={styles.RadioBtnWrapper}>
            <RadioButton.Group
              onValueChange={value1 => setValue(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value}>
              <RadioButton.Item label="Yes" value="Yes" color={'#1a4499'} />
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={value1 => setValue(value1)}
              // status={value === 'first' ? 'checked' : 'unchecked'}
              value={value}>
              <RadioButton.Item label="No" value="No" color={'#1a4499'} />
            </RadioButton.Group>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  RadioBtnWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    alignSelf: 'center',
  },
});

//make this component available to the app
export default OwnerPost;
