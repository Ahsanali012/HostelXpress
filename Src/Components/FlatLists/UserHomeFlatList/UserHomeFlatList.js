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
  const [isLiked, setIsLike] = useState(false);
  const onLikePressed = () => {
    setIsLike(!isLiked);
  };
  return (
    <View style={{}}>
      <FlatList
        data={UserHomPg}
        // keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          // console.log('--------> Inside UserFlatList', item.BookingStatus);
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
                      width: '65%',

                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 18}}>Marhaba Hostels</Text>

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
                    </TouchableOpacity>
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
