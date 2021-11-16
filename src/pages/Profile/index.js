import React from 'react';
import {
  Container,
  UsernameArea,
  Username,
  AreaButton,
  NewLink,
  TextButton,
  Logout,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

function Profile() {
  const navigation = useNavigation();

  const {user, signOut} = useAuth();

  return (
    <Container>
      <UsernameArea>
        <Username>{user.name != '' ? `Olá, ${user.name}!` : 'Olá!'}</Username>
      </UsernameArea>

      <AreaButton>
        <NewLink onPress={() => navigation.navigate('Register')}>
          <TextButton>Registrar gastos</TextButton>
        </NewLink>

        <Logout onPress={() => signOut()}>
          <TextButton>Sair</TextButton>
        </Logout>
      </AreaButton>
    </Container>
  );
}

export default Profile;
