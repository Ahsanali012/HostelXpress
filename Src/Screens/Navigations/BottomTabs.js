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
import AdminPost from '../AdminPost/AdminPost';
import AdminProfile from '../AdminProfile/AdminProfile';
import AdminUser from '../AdminUser/AdminUser';
const Tab = createBottomTabNavigator();
const BottomTab = () => (
  <Tab.Navigator
    initialRouteName={'AdminPost'}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,

      tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#304d8b',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopColor: '#304d8b',
        height: '8%',
        // marginBottom: 20,
        // bottom: 20,
      },
    }}>
    <Tab.Screen
      name={'AdminPost'}
      component={AdminPost}
      options={{
        tabBarIcon: ({color, size}) => (
          <Text style={{color, borderBottomWidth: 1, borderBottomColor: color}}>
            Posts
          </Text>
        ),
      }}
    />
    <Tab.Screen
      name={'AdminUser'}
      component={AdminUser}
      options={{
        tabBarIcon: ({color, size}) => (
          <Text style={{color, borderBottomWidth: 1, borderBottomColor: color}}>
            Users
          </Text>
        ),
      }}
    />

    <Tab.Screen
      name={'AdminProfile'}
      component={AdminProfile}
      options={{
        tabBarIcon: ({color, size}) => (
          <Text style={{color, borderBottomWidth: 1, borderBottomColor: color}}>
            Profile
          </Text>
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
const styles = StyleSheet.create({
  iconStyle: {alignSelf: 'center'},
  //   lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
