import React from 'react';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Thadeu</Title>
      </Top>
      <Icon name='keyboard-arrow-down' type='MaterialIcons' size={20} color="#fff" />
    </Container>
  );
}
