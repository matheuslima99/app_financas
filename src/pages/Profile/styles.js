import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #121212;
`;

export const UsernameArea = styled.View`
  width: 90%;
  align-items: center;
  margin-top: 40px;
`;

export const Username = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const AreaButton = styled.View`
  width: 90%;
  margin-top: 23px;
`;

export const NewLink = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #00b94a;
  margin-bottom: 8px;
`;

export const Logout = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #c62c36;
  margin-bottom: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
