import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native'

export default function StartInfo() {
  return (
    <Wrapper>
      <MainText>Enter a city where</MainText>
      <MainText>you want the weather</MainText>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  margin-top: 60px;
  align-items: center;
`;

const MainText = styled.Text`
  color: #fff;
  font-size: 20px;
`;