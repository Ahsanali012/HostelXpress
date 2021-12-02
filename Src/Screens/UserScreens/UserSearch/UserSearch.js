//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
// create a component
const UserSearch = () => {
  const [value, setValue] = React.useState('');
  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 25, width: '95%', alignSelf: 'center'}}>
        <Text style={{fontSize: 30, color: '#1a4499'}}>Advance Search</Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Price
        </Text>

        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
          }}>
          <Text style={{color: 'black'}}>From :</Text>

          <View
            style={{
              width: 70,
              height: 25,
              borderRadius: 4,
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 1,
              paddingLeft: 5,
              left: 10,
            }}>
            <Text style={{paddingBottom: 1, fontSize: 16}}>3000 </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              width: 150,
            }}>
            <Text style={{}}>To</Text>
            <View
              style={{
                width: 70,
                height: 25,
                borderRadius: 4,
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                paddingLeft: 5,
                alignItems: 'center',
                left: 10,
              }}>
              <Text style={{paddingBottom: 1, fontSize: 16}}>10,000 </Text>
            </View>
          </View>
        </View>
        <Slider
          style={{width: 300, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1a4499"
          maximumTrackTintColor="blue"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignContent: 'center',
            // width: 150,
            // backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            Location:
          </Text>
          <View
            style={{
              height: 30,
              width: 180,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
            }}>
            <Text style={{paddingTop: 5}}>dd</Text>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Persons:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingBottom: 3,
              }}>
              <View style={styles.RadioBtnWrapper}>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="single"
                    value="Single"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="Double"
                    value="Double"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'second' ? 'checked' : 'unchecked'}
                  color={'black'}
                  value={value}>
                  <RadioButton.Item
                    label="Triple"
                    value="Triple"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
              </View>
            </View>
            <View style={{paddingBottom: 3}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Type:
              </Text>
              <View style={styles.RadioBtnWrapper}>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="Furnished"
                    value="Furnished"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="Non-Furnished"
                    value="Non-Furnished"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
              </View>
            </View>
            <View style={{bottom: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Mess:
              </Text>
              <View style={styles.RadioBtnWrapper1}>
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
            <View style={{bottom: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Internet:
              </Text>
              <View style={styles.RadioBtnWrapper1}>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="Yes"
                    value="Yes1"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item label="No" value="No1" color={'#1a4499'} />
                </RadioButton.Group>
              </View>
            </View>
            <View style={{bottom: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
                Electricity:
              </Text>
              <View style={styles.RadioBtnWrapper1}>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item
                    label="Yes"
                    value="Yes2"
                    color={'#1a4499'}
                  />
                </RadioButton.Group>
                <RadioButton.Group
                  onValueChange={value1 => setValue(value1)}
                  // status={value === 'first' ? 'checked' : 'unchecked'}
                  value={value}>
                  <RadioButton.Item label="No" value="No2" color={'#1a4499'} />
                </RadioButton.Group>
              </View>
            </View>
            <TouchableOpacity style={styles.SearchBtn}>
              <Text style={styles.SearchBtnTxt}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  RadioBtnWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',

    alignSelf: 'center',
  },
  SearchBtn: {
    backgroundColor: '#1a4499',
    alignItems: 'center',
    justifyContent: 'center',

    height: '8%',
    bottom: 7,
    borderRadius: 5,
  },
  SearchBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  RadioBtnWrapper1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
});

//make this component available to the app
export default UserSearch;
