import React from 'react';
import {View, Text, Button} from 'react-native';

import {useAuth} from '../../contexts/auth';

function Home() {
  const {user, signOut} = useAuth();

  return (
    <View>
      <Text>Bem vindo: {user && user.name} </Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}

export default Home;
