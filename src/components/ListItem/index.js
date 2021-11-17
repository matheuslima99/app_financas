import React from 'react';
import {Container, TypeArea, Text, Balance} from './styles';

import Icon from 'react-native-vector-icons/Feather';

// import { Container } from './styles';

const ListItem = ({data}) => {
  return (
    <Container>
      <TypeArea bgColor={data.type}>
        <Icon
          name={data.type === 'receita' ? 'arrow-up' : 'arrow-down'}
          size={17}
          color="#fff"
        />
        <Text>{data.type}</Text>
      </TypeArea>
      <Balance>R$: 900</Balance>
    </Container>
  );
};

export default ListItem;
