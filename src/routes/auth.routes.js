import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function AuthRoutes() {
  const StackAuth = createNativeStackNavigator();

  return (
    <StackAuth.Navigator>
      <StackAuth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <StackAuth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </StackAuth.Navigator>
  );
}

export default AuthRoutes;
