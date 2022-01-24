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
import {useNavigation} from '@react-navigation/native';

const OwnerHomeFlatList = props => {
  const navigation = useNavigation();
  const {OwnerHomPg, Onpress} = props;
  const [isLiked, setIsLike] = useState(false);
  const onLikePressed = () => {
    setIsLike(!isLiked);
  };
  return (
    <View style={{}}>
      <FlatList
        data={OwnerHomPg}
        // keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          console.log('--------> Inside OwnerFlatList ', item);
          return (
            <TouchableOpacity
              // onPress={() => navigation.navigate('HostelDetail', {item: item})}
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#d4d4d4',
                margin: 15,
                width: '94%',
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
                      width: Theme.wp('40%'),

                      alignItems: 'center',
                    }}>
                    <AntDesign
                      name={'wifi'}
                      size={20}
                      color={'black'}
                      style={{marginTop: 5, marginRight: Theme.wp('5%')}}
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
                        left: Theme.wp('9%'),
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
                      width: Theme.wp('45%'),
                      alignItems: 'center',
                    }}>
                    <Text style={{marginRight: Theme.wp('1%')}}>Wifi</Text>
                    <Text style={{marginLeft: Theme.wp('1%')}}>Bed</Text>
                    <Text style={{marginLeft: Theme.wp('1%')}}>Mess</Text>
                    <Text style={{marginLeft: Theme.wp('1%')}}>Buss</Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        left: Theme.wp('4%'),
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
export default OwnerHomeFlatList;
