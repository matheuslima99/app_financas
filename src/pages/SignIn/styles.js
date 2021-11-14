import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 18px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.20)',
})`
  width: 90%;
  color: #fff;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #00b94a;
  margin-top: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
