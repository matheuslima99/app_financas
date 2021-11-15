import React from 'react';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {View, ActivityIndicator} from 'react-native';

function Routes() {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: '#121212',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <ActivityIndicator size="large" color="##00b94a;" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
