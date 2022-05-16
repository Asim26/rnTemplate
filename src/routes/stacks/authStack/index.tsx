import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/auth/login';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
