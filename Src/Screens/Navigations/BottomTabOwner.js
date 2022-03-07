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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//importing Screens
import OwnerHome from '../OwnerScreens/OwnerHome/OwnerHome';
import OwnerProfile from '../OwnerScreens/OwnerProfile/OwnerProfile';
import OwnerPost from '../OwnerScreens/OwnerPost/OwnerPost';
import OwnerAds from '../OwnerScreens/OwnerAds/OwnerAds';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Requests from '../OwnerScreens/Requests/Requests';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabOwner = () => (
  <Tab.Navigator
    initialRouteName={'OwnerHome'}
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
      name={'OwnerHome'}
      component={_userHome}
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
      component={_UsersReq}
      options={{
        tabBarLabel: 'Booking Requests',
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

const _userHome = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // }}
      initialRouteName={'OwnerHostels'}
      headerMode="none">
      <Stack.Screen
        name="Owner Hostels"
        component={OwnerHome}
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
    </Stack.Navigator>
  );
};

const _UsersReq = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // }}
      initialRouteName={'UsersReq'}
      headerMode="none">
      <Stack.Screen name="Booking Requests" component={OwnerAds} />
      <Stack.Screen name="Requests" component={Requests} />
    </Stack.Navigator>
  );
};

export default BottomTabOwner;
const styles = StyleSheet.create({
  iconStyle: {alignSelf: 'center'},
  //   lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
