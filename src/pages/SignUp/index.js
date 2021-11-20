import React, {useState} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  TextButton,
} from '../SignIn/styles';

import {useAuth} from '../../contexts/auth';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp, loadingAuth} = useAuth();

  const handleSignUp = () => {
    signUp(email, password, name);
  };

  return (
    <Background behavior={Platform.OS === 'ios' ?? 'padding'}>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={t => setName(t)}
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
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <TextButton>Cadastrar</TextButton>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default SignUp;
