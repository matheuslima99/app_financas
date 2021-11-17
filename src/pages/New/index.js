import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import ListItem from '../../components/ListItem';

function Register() {
  const [teste, setTeste] = useState([{key: '1', item: 'testeaaa'}]);

  return (
    <View>
      <Text>Rigister</Text>
      <FlatList
        data={teste}
        keyExtractor={item => item.key}
        renderItem={({item}) => <ListItem  />}
      />
    </View>
  );
}

export default Register;
