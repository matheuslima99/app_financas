import React from 'react';
import {Container, ButtonMenu} from './styles';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu activeOpacity={1} onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={40} color="#fff" />
      </ButtonMenu>
    </Container>
  );
}

export default Header;
