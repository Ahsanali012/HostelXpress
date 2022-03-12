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

import {useRoute} from '@react-navigation/core';

const PostHomeFlatList = props => {
  const navigation = useNavigation();
  const {OwnerHomPg, Onpress, hostelName} = props;

  console.log('Coming inside Flatlist ====>', hostelName);

  const [isLiked, setIsLike] = useState(false);

  const onLikePressed = () => {
    setIsLike(!isLiked);
  };

  const onDelete = ind => {
    console.log('Index======>>>', ind);
    var indexString = ind.toString();
    // UserHomPg.pop(ind);
    const currentUid = auth.currentUser.uid;

    db.ref('Owner/' + currentUid)
      .child('/OwnerPostAdd')
      .child(indexString)
      .remove();

    db.ref('Owner/').child('/OwnerPostAdd').child(indexString).remove();
  };
  return (
    <View style={{}}>
      <FlatList
        data={OwnerHomPg}
        inverted={true}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          console.log('--------> Inside OwnerFlatList ', index);

          return (
            <View
              style={{
                borderRadius: 10,
                borderBottomLeftRadius: 10,
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
                      width: Theme.wp('33%'),
                      height: Theme.hp('20%'),
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
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 5,
                      width: '65%',
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        color: 'black',
                        paddingRight: '10%',
                      }}>
                      {item.HostelName}
                    </Text>

                    <TouchableOpacity>
                      <FontAwesome5
                        // onPress={() => console.warn(index)}
                        onPress={
                          () =>
                            navigation.navigate('OwnerPostUpdate', {
                              index: index,
                            })
                          //  navigation.navigate('OwnerPost', {index: index})
                        }
                        name={'pen'}
                        size={17}
                        color={Theme.primary}
                        style={{marginTop: 5, right: Theme.wp('2%')}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <FontAwesome5
                        onPress={() => onDelete(index)}
                        name={'trash'}
                        size={17}
                        color={'red'}
                        style={{marginTop: 5, left: Theme.wp('2%')}}
                      />
                    </TouchableOpacity>
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

                  <View style={{marginTop: 5}}>
                    <Text style={{fontSize: 18}}>{item.postDesc}</Text>
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
            </View>
          );
        }}
      />
    </View>
  );
};
export default PostHomeFlatList;
