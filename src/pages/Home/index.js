import React, {useEffect, useState} from 'react';
import {
  Container,
  InfoArea,
  Username,
  Userbalance,
  Text,
  MovementArea,
  MovementList,
  ContainerList,
} from './styles';
import {ActivityIndicator} from 'react-native';

import {format} from 'date-fns';
import firebase from '../../services/firebaseConnections';

import {useAuth} from '../../contexts/auth';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

function Home() {
  const {user} = useAuth();
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecords = async () => {
      setLoading(true);
      const uid = user.key;

      await firebase
        .database()
        .ref('users')
        .child(uid)
        .on('value', snapshot => {
          setBalance(parseFloat(snapshot.val().balance));
        });

      await firebase
        .database()
        .ref('records')
        .child(uid)
        .on('value', snapshot => {
          setRecords([]);

          snapshot.forEach(childItem => {
            const data = {
              key: childItem.key,
              type: childItem.val().type,
              val: childItem.val().value,
            };
            setRecords(oldArray => [...oldArray, data].reverse());
          });
          setLoading(false);
        });
    };
    loadRecords();
  }, []);

  return (
    <Container>
      <Header />
      <InfoArea>
        <Username>{user.name ?? 'Olá!'}</Username>
        <Userbalance _balance={balance}>R$ {balance.toFixed(2)}</Userbalance>
      </InfoArea>

      <InfoArea>
        <Text>Ultimas movimentações</Text>
      </InfoArea>

      <MovementArea>
        {loading ? (
          <ContainerList>
            <ActivityIndicator size={30} color="#00b94a;" />
          </ContainerList>
        ) : (
          <MovementList
            showsVerticalScrollIndicator={false}
            data={records}
            keyExtractor={item => item.key}
            renderItem={({item}) => <ListItem data={item} />}
          />
        )}
      </MovementArea>
    </Container>
  );
}

export default Home;
