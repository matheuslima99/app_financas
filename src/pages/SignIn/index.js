import React from 'react';
import {Background, Container, Logo, Input, AreaInput, SubmitButton, TextButton, Link, LinkText} from './styles';

function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>

        <SubmitButton>
          <TextButton>Acessar</TextButton>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

export default SignIn;
