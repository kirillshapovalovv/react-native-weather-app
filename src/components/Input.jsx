import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Input({ gettingWeather }) {

  const [ inputValue, setInputValue ] = useState('');

  const getWeather = (e) => {
    if(inputValue.trim()) {
        gettingWeather(inputValue)
        setInputValue('')
    } else {
        Alert.alert('Please, input city!')
        return
    }
}

  return (
    <Wrapper>
      <MainInput 
        placeholder="Search location"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <MainButton 
        activeOpacity={0.6}
        onPress={getWeather}
      >
        <TextButton>Search</TextButton>
      </MainButton>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;
const MainInput = styled.TextInput`
  width: 80%;
  background: #fff;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const MainButton = styled.TouchableOpacity`
  width: 20%;
  background: #f9c74f;
  padding: 10px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
`;