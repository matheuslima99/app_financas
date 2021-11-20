import React, {useState} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Background,
  Container,
  Logo,
  Input,
  AreaInput,
  SubmitButton,
  TextButton,
  Link,
  LinkText,
} from './styles';

import {useAuth} from '../../contexts/auth';

function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, loadingAuth} = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ?? 'padding'}>
        <Logo source={require('../../assets/Logo.png')} />

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

        <SubmitButton onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <TextButton>Acessar</TextButton>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

export default SignIn;
