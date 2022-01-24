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
import UserHome from '../UserScreens/UserHome/UserHome';
import UserProfile from '../UserScreens/UserProfile/UserProfile';
import UserSaved from '../UserScreens/UserSaved/UserSaved';
import UserSearch from '../UserScreens/UserSearch/UserSearch';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyBookings from '../MyBookings/MyBookings';
const Tab = createBottomTabNavigator();
const BottomTabUser = () => (
  <Tab.Navigator
    initialRouteName={'UserHome'}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      //   tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
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
      name={'UserHome'}
      component={UserHome}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <AntDesign name={'home'} size={20} style={{color}} color={'white'} />
        ),
      }}
    />
    <Tab.Screen
      name={'UserSaved'}
      component={UserSaved}
      options={{
        tabBarLabel: 'Saved',
        tabBarIcon: ({color, size}) => (
          <Entypo name={'star'} size={20} style={{color}} color={'white'} />
        ),
      }}
    />
    <Tab.Screen
      name={'MyBookings'}
      component={MyBookings}
      options={{
        tabBarLabel: 'My Bookings',
        tabBarIcon: ({color, size}) => (
          <Entypo name={'Book'} size={20} style={{color}} color={'white'} />
        ),
      }}
    />

    <Tab.Screen
      name={'UserSearch'}
      component={UserSearch}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <AntDesign
            name={'search1'}
            size={20}
            style={{color}}
            color={'white'}
          />
        ),
      }}
    />
    <Tab.Screen
      name={'UserProfile'}
      component={UserProfile}
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

export default BottomTabUser;
const styles = StyleSheet.create({
  iconStyle: {alignSelf: 'center'},
  //   lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
