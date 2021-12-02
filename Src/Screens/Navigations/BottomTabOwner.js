import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  Text,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//importing Screens
import OwnerHome from '../OwnerScreens/OwnerHome/OwnerHome';
import OwnerProfile from '../OwnerScreens/OwnerProfile/OwnerProfile';
import OwnerPost from '../OwnerScreens/OwnerPost/OwnerPost';
import OwnerAds from '../OwnerScreens/OwnerAds/OwnerAds';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const BottomTabOwner = () => (
  <Tab.Navigator
    initialRouteName={'OwnerHome'}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      //   tabBarShowLabel: false,

      tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#1a4499',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopColor: '#304d8b',
        height: '8%',
        // marginBottom: 20,
        // bottom: 20,
      },
    }}>
    <Tab.Screen
      name={'OwnerHome'}
      component={OwnerHome}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <AntDesign name={'home'} size={20} style={{color}} color={'white'} />
        ),
      }}
    />
    <Tab.Screen
      name={'OwnerPost'}
      component={OwnerPost}
      options={{
        tabBarLabel: 'Post Ads',

        tabBarIcon: ({color, size}) => (
          <AntDesign
            name={'plussquareo'}
            size={20}
            style={{color}}
            color={'white'}
          />
        ),
      }}
    />

    <Tab.Screen
      name={'OwnerAds'}
      component={OwnerAds}
      options={{
        tabBarLabel: 'My Ads',
        tabBarIcon: ({color, size}) => (
          <AntDesign
            name={'hearto'}
            size={20}
            style={{color}}
            color={'white'}
          />
        ),
      }}
    />
    <Tab.Screen
      name={'OwnerProfile'}
      component={OwnerProfile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Ionicons
            name={'person-outline'}
            size={20}
            style={{color}}
            color={'white'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabOwner;
const styles = StyleSheet.create({
  iconStyle: {alignSelf: 'center'},
  //   lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
