import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuDrawer from './Drawer';
import OnBoarding1 from './OnBoarding1';
import SplashScreen from './SplashScreen';
import LoadingScreen from './LoadingScreen';
import AfterLoginTab from './AfterLoginTab';

const ScreenOptionSettings = {
  headerShown: false
};


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


const AfterLogin = () => (

    <Drawer.Navigator
      initialRouteName="AfterLogin"
      screenOptions={ScreenOptionSettings}
      drawerContent={(props) => <MenuDrawer {...props} />}>
      <Drawer.Screen name="AfterLogin" component={AfterLoginTab} />


    </Drawer.Navigator>

)


const RouteStack = () => (

    <Stack.Navigator
      initialRouteName="OnBoarding1"
      screenOptions={ScreenOptionSettings}>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="AfterLogin" component={AfterLogin} />
    </Stack.Navigator>

)



export { RouteStack }