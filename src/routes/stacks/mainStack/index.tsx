import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '@screens/general/welcome';
import {ROUTES} from '@utils/routes';
import React from 'react';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
};

export default MainStack;
