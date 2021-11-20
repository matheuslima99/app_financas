import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  background-color: #121212;
`;

export const InputArea = styled.View`
  width: 90%;
  align-items: center;
  margin-top: 40px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.20)',
})`
  width: 100%;
  color: #fff;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #00b94a;
  margin-bottom: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
