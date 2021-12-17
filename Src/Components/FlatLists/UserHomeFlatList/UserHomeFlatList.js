import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {auth, db} from '../../../Screens/Utils/Exports';
import styles from './Style';
import Theme from '../../../Screens/Utils/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const UserHomeFlatList = props => {
  const {UserHomPg, Onpress} = props;
  const [isLiked, setIsLike] = useState(false);
  const onLikePressed = () => {
    setIsLike(!isLiked);
  };
  return (
    <View style={{}}>
      <FlatList
        data={UserHomPg}
        renderItem={({item, index}) => {
          //   console.log(item);
          return (
            <TouchableOpacity
              onPress={Onpress}
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#d4d4d4',

                margin: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Image
                    style={{
                      width: Theme.wp('30%'),
                      height: Theme.hp('14%'),

                      resizeMode: 'cover',
                    }}
                    source={{uri: item.Image}}
                  />
                </View>

                <View style={{paddingStart: Theme.wp('6%')}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text>Marhaba Hostels</Text>
                    <TouchableOpacity onPress={onLikePressed}>
                      {isLiked ? (
                        <FontAwesome5
                          name={'star'}
                          size={20}
                          color={'black'}
                          style={{marginTop: 5, left: Theme.wp('2%')}}
                        />
                      ) : (
                        <FontAwesome
                          name={'star'}
                          size={22}
                          color={'blue'}
                          style={{marginTop: 5, left: Theme.wp('2%')}}
                        />
                      )}
                      {/* <FontAwesome5
                  name={'star'}
                  size={18}
                  color={'black'}
                  style={{marginTop: 5}}
                /> */}
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Entypo
                      name={'location-pin'}
                      size={20}
                      color={'black'}
                      style={{}}
                    />

                    <Text>Johar town, Lahore</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: Theme.wp('44%'),
                      alignItems: 'center',
                    }}>
                    <AntDesign
                      name={'wifi'}
                      size={20}
                      color={'black'}
                      style={{marginTop: 5, marginRight: Theme.wp('3%')}}
                    />
                    <Ionicons
                      name={'bed-outline'}
                      size={20}
                      color={'black'}
                      style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                    />
                    <FontAwesome5
                      name={'utensils'}
                      size={15}
                      color={'black'}
                      style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                    />
                    <FontAwesome
                      name={'bus'}
                      size={15}
                      color={'black'}
                      style={{marginTop: 5, marginRight: Theme.wp('5%')}}
                    />
                    <Text
                      style={{
                        left: Theme.wp('3%'),
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Rs
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: Theme.wp('47%'),
                      alignItems: 'center',
                    }}>
                    <Text>Wifi</Text>
                    <Text>Bed</Text>
                    <Text>Mess</Text>
                    <Text>Buss</Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        left: Theme.wp('3%'),
                        fontSize: 17,
                      }}>
                      {item.Price}
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
