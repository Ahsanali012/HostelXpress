import React, {Component, useEffect} from 'react';
import {View, StatusBar, SafeAreaView, LogBox} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens Imported
import SplashScreen from '../Splash/Splash';
import Loginscreen from '../LoginScreen/LoginScreen';
import SignUp from '../SignUp/SignUp';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import RecoverEmail from '../RecoveryEmail/RecoveryEmail';
import LoginAdmin from '../LoginAdmin/LoginAdmin';
import BottomTab from './BottomTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabUser from './BottomTabsUser';
import SearchBar from '../../Components/SearchBar/SearchBar';
import UserHostelDetails from '../UserScreens/UserHostelDetail/UserHostelDetail';
import UserBooking from '../UserScreens/UserBooking/UserBooking';
import BottomTabOwner from './BottomTabOwner';
const Stack = createNativeStackNavigator();
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
  }
  getitem = async () => {
    const Val1 = await AsyncStorage.getItem('this');
    console.log('Val===>', Val1);
    var item = Val1;
    this.setState({value: item});
    console.log('item===>', item);
  };

  componentDidMount() {
    this.getitem();
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          {Platform.OS === 'ios' ? (
            <StatusBar barStyle="dark-content" />
          ) : (
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
          )}
        </View>
        <View></View>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTabUser"
            component={BottomTabUser}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTabOwner"
            component={BottomTabOwner}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Loginscreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Recover" component={RecoverEmail} />
          <Stack.Screen name="Admin" component={LoginAdmin} />
          <Stack.Screen name="SearchBar" component={SearchBar} />
          <Stack.Screen name="HostelDetail" component={UserHostelDetails} />
          <Stack.Screen name="UserBooking" component={UserBooking} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

export default Navigation;
