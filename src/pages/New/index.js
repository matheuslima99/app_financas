import React, {useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import {
  Background,
  InputArea,
  Input,
  RegisterButton,
  TextButton,
} from './styles';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

function Register() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

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

          <RegisterButton>
            <TextButton>Registrar</TextButton>
          </RegisterButton>
        </InputArea>
      </Background>
    </TouchableWithoutFeedback>
  );
}

export default Register;
