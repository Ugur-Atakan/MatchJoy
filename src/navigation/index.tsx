/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { t } from 'i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '../utils/redux/hooks';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';
import MatchScreen from '../screens/app/match';
import Messagescreen from '../screens/app/message';
import SettingsScreen from '../screens/app/settings';
import LoadingComponent from '../component/common/Loading';
import ProfileScreen from '../screens/profile';
import LanguageSettingScreen from '../screens/app/settings/LanguageSetting';
import PasswordResetScreen from '../screens/auth/ResetPassword';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const { isLoggedIn, isLoading } = useAppSelector(state => state.user);
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: 'MatchJoy',
        }}>
        <Stack.Screen
          name="MainStack"
          component={isLoggedIn ? UserStack : AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name='PasswordResetScreen' component={PasswordResetScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
      />
      <Tab.Screen
        name="MessageScreen"
        component={Messagescreen}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppScreen" component={TabNavigator} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="LanguageSettingsScreen"
        component={LanguageSettingScreen}
      />

    </Stack.Navigator>
  );
};

export default Navigator;
