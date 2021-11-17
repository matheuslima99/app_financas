import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 20px 0px 10px 0px;
`;

export const TypeArea = styled.View`
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${props =>
    props.bgColor === 'receita' ? '#00b94a' : '#c62c36'};
`;

export const Text = styled.Text`
  font-size: 17px;
  font-style: italic;
  padding: 5px;
  color: #fff;
`;

export const Balance = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
