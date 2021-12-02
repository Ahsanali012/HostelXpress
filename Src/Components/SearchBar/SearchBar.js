//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
// create a component
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <TextInput
          placeholder="Search Hotels"
          placeholderTextColor="#37709a"
          // onChangeText={Text => setDescription(Text)}
          // value={description}
          style={styles.descTxt}
          multiline
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 15,
            height: 50,
            width: 50,
            paddingTop: 5,

            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 10,
          }}>
          <AntDesign
            name={'search1'}
            size={20}
            color={'white'}
            style={{paddingTop: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default SearchBar;
