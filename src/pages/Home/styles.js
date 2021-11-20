import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #131313;
`;

export const InfoArea = styled.View`
  width: 90%;
  margin-top: 30px;
`;

export const Username = styled.Text`
  font-size: 18px;
  font-style: italic;
  color: #fff;
`;

export const Userbalance = styled.Text`
  color: ${props => (props._balance < 0 ? '#f00' : '#00b94c')};
  font-size: 28px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #00b94a;
  font-size: 17px;
  margin-bottom: 5px;
`;

export const MovementArea = styled.View`
  align-items: center;
  width: 90%;
  flex: 1;
  padding: 8px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #fff;
`;

export const MovementList = styled.FlatList`
  width: 100%;
  flex: 1;
`;

export const ContainerList = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.02);
`;
