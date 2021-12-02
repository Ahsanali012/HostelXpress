import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
// Navigator Screens
import Navigation from './Src/Screens/Navigations/Navigations';

function App() {
  return (
    <>
      <NavigationContainer options>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Navigation" component={Navigation} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
