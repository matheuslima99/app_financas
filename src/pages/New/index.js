import React, {useState} from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from 'react-native';
import {
  Background,
  InputArea,
  Input,
  RegisterButton,
  TextButton,
} from './styles';

import firebase from '../../services/firebaseConnections';

import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

function Register() {
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');
  const {user} = useAuth();

  const handleRegister = () => {
    if (isNaN(parseFloat(value))) {
      alert('Digite algum valor');
      return;
    }

    Alert.alert(
      'Deseja continuar?',
      `Tipo de transação: ${type} - valor: ${value}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd(),
        },
      ],
    );
  };

  const handleAdd = async () => {
    const uid = user.key;

    const _key = await firebase.database().ref('records').child(uid).push().key;

    await firebase
      .database()
      .ref('records')
      .child(uid)
      .child(_key)
      .set({
        value: parseFloat(value),
        key: _key,
        type,
        date: format(new Date(), 'dd/MM/yy'),
      });

    let _user = await firebase.database().ref('users').child(uid);

    await _user.once('value').then(snapshot => {
      let balance = parseFloat(snapshot.val().balance);

      let setBalance = _user.child('balance');

      type === 'receita'
        ? (balance += parseFloat(value))
        : (balance -= parseFloat(value));

      setBalance.set(balance);
      setValue('');
    });

    Keyboard.dismiss();
    setValue('');
    navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background behavior={Platform.OS === 'ios' ?? 'padding'}>
        <Header />
        <InputArea>
          <Input
            placeholder="Digite o valor"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={value => setValue(value)}
          />

          <Picker onChange={setType} type={type} />

          <RegisterButton onPress={handleRegister}>
            <TextButton>Registrar</TextButton>
          </RegisterButton>
        </InputArea>
      </Background>
    </TouchableWithoutFeedback>
  );
}

export default Register;
