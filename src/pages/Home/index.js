import React, {useState} from 'react';
import {
  Container,
  InfoArea,
  Username,
  Userbalance,
  Text,
  MovementArea,
  MovementList,
} from './styles';

import {useAuth} from '../../contexts/auth';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

function Home() {
  const {user} = useAuth();
  const [records, setRecords] = useState([
    {key: '1', type: 'receita', value: 134},
    {key: '2', type: 'despesa', value: 1434},
    {key: '3', type: 'receita', value: 134},
    {key: '4', type: 'despesa', value: 85.4},
    {key: '5', type: 'receita', value: 85.4},
    {key: '6', type: 'despesa', value: 85.4},
    {key: '7', type: 'despesa', value: 85.4},
  ]);

  return (
    <Container>
      <Header />
      <InfoArea>
        <Username>{user.name ?? 'Olá!'}</Username>
        <Userbalance>R$ {user.balance ?? 0}</Userbalance>
      </InfoArea>

      <InfoArea>
        <Text>Ultimas movimentações</Text>
      </InfoArea>

      <MovementArea>
        <MovementList
          showsVerticalScrollIndicator={false}
          data={records}
          keyExtractor={item => item.key}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </MovementArea>
    </Container>
  );
}

export default Home;
