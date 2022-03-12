//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Provider, Appbar, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import UserHomeFlatList from '../../../Components/FlatLists/UserHomeFlatList/UserHomeFlatList';
import {auth, db} from '../../Utils/Exports';
import styles from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
// create a component
const UserSearch = props => {
  const [value, setValue] = React.useState(false);
  const [value2, setValue2] = React.useState(false);
  const [value3, setValue3] = React.useState(false);
  const [value4, setValue4] = React.useState(false);
  const [value5, setValue5] = React.useState(false);

  const [spareArray, setspareArray] = React.useState([]);

  console.log('RadioButton Value For Persons=== ', value);
  console.log('RadioButton Value For Type ==== ', value2);
  console.log('RadioButton Value For Mess==== ', value3);
  console.log('RadioButton Value For Internet === ', value4);
  console.log('RadioButton Value For Electricity=== ', value4);
  const [searchData, SetsearchData] = React.useState(false);
  const navigation = useNavigation();
  const [array, SetArray] = useState([]);

  console.log('SearchArrayData==== ', array);
  const [price, Setprice] = useState('');
  const [location, Setlocation] = useState('');
  const [quesData1, setQuesData1] = useState([]);

  console.log('Filter- ArrayData==== ', quesData1);

  const getValues = async () => {
    const currentUid = auth.currentUser.uid;
    const ref = db.ref('Owner/').child('/OwnerPostAdd');

    await ref.on('value', snapshot => {
      if (snapshot.val()) {
        const data = snapshot.val();
        console.log('Alll=====', data);

        setQuesData1(Object.values(data));

        setspareArray(Object.values(data));
      } else {
      }
    });
  };
  console.log('Value2 ===== ', value2);

  const myFilter = () => {
    let custom = spareArray.filter(function (value) {
      return (
        value.Price <= price &&
          value.Furnished == value2 &&
          value.Mess == value3,
        value.location == location
      );
    });
    console.log('My Searched Value =====================', custom);
    setQuesData1(custom);
  };

  useEffect(() => {
    getValues();
  }, []);
  // console.log('thisssss', Object.values(quesData1));
  return (
    <>
      {searchData === true ? (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={styles.headerWrap}>
            <View style={styles.flexJustify}>
              <AntDesign
                name="arrowleft"
                color={'white'}
                size={23}
                onPress={() => SetsearchData(false)}
              />
            </View>
          </View>
          <View style={{paddingTop: 50}}>
            <UserHomeFlatList
              UserHomPg={quesData1}
              Onpress={() => navigation.navigate('HostelDetail')}
            />
          </View>
        </View>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={{padding: 25, width: '95%', alignSelf: 'center'}}>
              <Text style={{fontSize: 30, color: '#1a4499'}}>
                Advance Search
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 20,
                  // alignContent: 'center',
                  // width: 150,
                  // backgroundColor: 'red',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Price:
                </Text>
                <TextInput
                  style={{
                    width: '61%',
                    color: 'black',
                    alignSelf: 'center',
                    fontSize: 16,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                  onChangeText={text => Setprice(text)}
                  placeholder={'Enter Your Price '}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 15,
                  // alignContent: 'center',
                  // width: 150,
                  // backgroundColor: 'red',
                }}>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  Location:
                </Text>

                <TextInput
                  style={{
                    width: '61%',
                    color: 'black',
                    alignSelf: 'center',
                    fontSize: 16,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                  onChangeText={text => Setlocation(text)}
                  placeholder={'Enter Location To Search '}
                />
              </View>
              <View>
                <View style={{paddingTop: 5}}>
                  <Text
                    style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
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
                        onValueChange={value2 => setValue(value2)}
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
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Type:
                    </Text>
                    <View style={styles.RadioBtnWrapper}>
                      <RadioButton.Group
                        onValueChange={val2 => setValue2(val2)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value2}>
                        <RadioButton.Item
                          label="Furnished"
                          value="Yes"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val2 => setValue2(val2)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value2}>
                        <RadioButton.Item
                          label="Not-Furnished"
                          value="No"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                    </View>
                  </View>
                  <View style={{bottom: 10}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Mess:
                    </Text>
                    <View style={styles.RadioBtnWrapper1}>
                      <RadioButton.Group
                        onValueChange={val3 => setValue3(val3)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value3}>
                        <RadioButton.Item
                          label="Yes"
                          value="Yes"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val3 => setValue3(val3)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value3}>
                        <RadioButton.Item
                          label="No"
                          value="No"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                    </View>
                  </View>
                  <View style={{bottom: 10}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Internet:
                    </Text>
                    <View style={styles.RadioBtnWrapper1}>
                      <RadioButton.Group
                        onValueChange={val4 => setValue4(val4)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value4}>
                        <RadioButton.Item
                          label="Yes"
                          value="Yes"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val4 => setValue4(val4)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value4}>
                        <RadioButton.Item
                          label="No"
                          value="No"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                    </View>
                  </View>
                  <View style={{bottom: 10}}>
                    <Text
                      style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
                      Electricity:
                    </Text>
                    <View style={styles.RadioBtnWrapper1}>
                      <RadioButton.Group
                        onValueChange={val5 => setValue5(val5)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value5}>
                        <RadioButton.Item
                          label="Yes"
                          value="Yes"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val5 => setValue5(val5)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value5}>
                        <RadioButton.Item
                          label="No"
                          value="No"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      myFilter();
                      SetsearchData(true);
                    }}
                    style={styles.SearchBtn}>
                    <Text style={styles.SearchBtnTxt}>Search</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

//make this component available to the app
export default UserSearch;
