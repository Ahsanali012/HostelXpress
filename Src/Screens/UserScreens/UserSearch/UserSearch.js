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
  const [searchData, SetsearchData] = React.useState(false);
  const navigation = useNavigation();
  const [array, SetArray] = useState([]);
  const [price, Setprice] = useState('');
  const [quesData1, setQuesData1] = useState([]);

  const getValues = async () => {
    const currentUid = auth.currentUser.uid;
    const ref = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');

    await ref.on('value', snapshot => {
      if (snapshot.val()) {
        const data = snapshot.val();
        setQuesData1(Object.values(data));
        console.log('Data--', quesData1);

        // Object.values(snapshot.val()).map(item => {
        //   console.log(item);
        // });
      } else {
      }
    });
  };

  const filter = async () => {
    const currentUid = auth.currentUser.uid;
    const ref1 = db.ref('Owner/' + currentUid).child('/OwnerPostAdd');
    let filtered = [];
    ref1.on('value', snapshot => {
      snapshot.forEach(child => {
        ref1
          .child(child.key)
          .orderByChild('Price')
          .equalTo('555')
          .on('value', snapshot1 => {
            console.log('==>filtered', child.val());
            filtered.push(child.val());
          });

        // filter.on('value', snapshot1 => {
        //   console.log('==>filtered', child.val());
        //   filtered.push(child.val());
        // });
      });
      setQuesData1(filtered);
    });
    // var filter = ref.orderByChild("database/username").equalTo("some_data");
  };

  const SearchFilterFunction = UserPrice => {
    //passing the inserted text in textinput
    const newData = quesData1.filter(function (item) {
      //applying filter for the inserted text in search bar
      // if(item.personalInfo.developmentCate!==null)

      const itemData = item.Price ? item.Price.toUpperCase() : ''.toUpperCase();
      const textData = UserPrice.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    if (UserPrice == '') {
      // this.setState({userInfo: this.props.user, text: ''});
      setQuesData1(quesData1);
    } else {
      // this.setState({
      //   //setting the filtered newData on datasource
      //   //After setting the data it will automatically re-render the view
      //   searchedData: newData,
      //   text: text,
      // });
      SetArray(newData);
    }
  };

  useEffect(() => {
    getValues();
  }, []);
  console.log('thisssss', Object.values(quesData1));
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
              UserHomPg={price == '' ? quesData1 : array}
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
              {/* <View
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
                    <Text style={{paddingBottom: 1, fontSize: 16}}>
                      10,000{' '}
                    </Text>
                  </View>
                </View>
              </View> */}
              {/* <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#1a4499"
                maximumTrackTintColor="blue"
              /> */}
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
                <View
                  style={{
                    height: 30,
                    width: 180,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center',
                  }}>
                  <Text style={{paddingTop: 5}}>Location</Text>
                </View>
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
                          value="Furnished"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val2 => setValue2(val2)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value2}>
                        <RadioButton.Item
                          label="Non-Furnished"
                          value="Non-Furnished"
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
                          value="Yes1"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val4 => setValue4(val4)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value4}>
                        <RadioButton.Item
                          label="No"
                          value="No1"
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
                          value="Yes2"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                      <RadioButton.Group
                        onValueChange={val5 => setValue5(val5)}
                        // status={value === 'first' ? 'checked' : 'unchecked'}
                        value={value5}>
                        <RadioButton.Item
                          label="No"
                          value="No2"
                          color={'#1a4499'}
                        />
                      </RadioButton.Group>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      SearchFilterFunction(price);

                      SetsearchData(true);
                    }}
                    // onPress={() => navigation.navigate('UserHome')}
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
