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

const OwnerPostReqFlatList = props => {
  const navigation = useNavigation();
  const {OwnerHomPg, Onpress, hostelName} = props;

  console.log('Coming inside Flatlist ====>', hostelName);
  const [isLiked, setIsLike] = useState(false);

  const onLikePressed = () => {
    setIsLike(!isLiked);
  };

  return (
    <View style={{}}>
      <FlatList
        data={OwnerHomPg}
        inverted={true}
        // keyExtractor={item => item.id}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          console.log('--------> Inside OwnerFlatList ', item);

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Requests', {item: item})}
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
                    paddingStart: Theme.wp('6%'),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      {item.HostelName}
                    </Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 18, color: 'gray', width: 200}}>
                      {item.postDesc}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '10%',
                      width: '88%',
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
                        marginLeft: Theme.wp('24%'),
                        paddingTop: '7%',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      Rs {item.Price}
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
export default OwnerPostReqFlatList;
