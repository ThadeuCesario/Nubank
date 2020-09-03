import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function header() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
