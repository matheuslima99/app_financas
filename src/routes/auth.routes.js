import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';

function AuthRoutes() {
  const StackAuth = createNativeStackNavigator();

  return (
    <StackAuth.Navigator>
      <StackAuth.Screen name="SignIn" component={SignIn} />
    </StackAuth.Navigator>
  );
}

export default AuthRoutes;
