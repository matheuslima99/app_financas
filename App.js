import React from 'react';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2', 'AsyncStorage']);
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
