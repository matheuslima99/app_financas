import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Register from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#171717',
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveTintColor: '#ddd',
        drawerInactiveBackgroundColor: '#000',
        drawerItemStyle: {
          marginVertical: 5,
        },
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Register" component={Register} />
      <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
