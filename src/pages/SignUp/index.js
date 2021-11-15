import React, {useState} from 'react';
import {Platform} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  TextButton,
} from '../SignIn/styles';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background behavior={Platform.OS === 'ios' ?? 'padding'}>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChaneText={t => setName(t)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={t => setEmail(t)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={t => setPassword(t)}
          />
        </AreaInput>

        <SubmitButton>
          <TextButton>Cadastrar</TextButton>
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default SignUp;
