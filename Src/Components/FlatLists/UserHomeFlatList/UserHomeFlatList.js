import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {auth, db} from '../../../Screens/Utils/Exports';
import styles from './Style';
import Theme from '../../../Screens/Utils/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const UserHomeFlatList = props => {
  const navigation = useNavigation();

  const {UserHomPg, Onpress, hostelName} = props;

  console.log('Coming inside Flatlist User ====>', hostelName);

  return (
    <View style={{}}>
      <FlatList
        data={UserHomPg}
        renderItem={({item, index}) => {
          console.log('--------> Inside UserFlatList');
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('HostelDetail', {item: item})}
              style={{
                borderRadius: 10,
                borderBottomLeftRadius: 10,
                borderWidth: 1,
                borderColor: '#d4d4d4',
                margin: 15,
                width: '90%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Image
                    style={{
                      width: Theme.wp('33%'),
                      height: Theme.hp('18%'),
                      borderRadius: 10,
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.Image}}
                  />
                </View>

                <View
                  style={{
                    paddingStart: Theme.wp('3%'),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '58%',

                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 18}}>{item.HostelName}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '5%',
                      width: '70%',
                    }}>
                    <Entypo
                      name={'location-pin'}
                      size={20}
                      color={'black'}
                      style={{}}
                    />

                    <Text style={{fontSize: 18}}>{item.location}</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 18, paddingLeft: 5}}>
                      {item.postDesc}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // width: Theme.wp('44%'),
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        marginLeft: Theme.wp('30%'),
                        paddingTop: '7%',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      Rs {item.Price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // width: Theme.wp('47%'),
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        left: Theme.wp('43%'),
                        fontSize: 17,
                      }}>
                      {/* {item.Price} */}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default UserHomeFlatList;
