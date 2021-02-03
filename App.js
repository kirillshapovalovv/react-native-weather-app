import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components';

import { Input, Weather, StartInfo } from './src/components/'


const API_KEY = 'f0edf5a1ca307d2023db8f31b501ee63';

export default function App() {

  const [weather, setWeather] = useState({
    city: null,
    temp: null,
    country: null,
    pressure: null,
    feelsLike: null,
    windSpeed: null,
    tempMax: null,
    tempMin: null,
    weatherDay: null,
  })

  const gettingWeather = async (city) => {
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setWeather({
        city: data.name,
        temp: Math.floor(data.main.temp),
        country: data.sys.country,
        pressure: data.main.pressure,
        feelsLike: Math.floor(data.main.feels_like),
        windSpeed: Math.floor(data.wind.speed),
        tempMax: Math.floor(data.main.temp_max),
        tempMin: Math.floor(data.main.temp_min),
        weatherDay: data.weather[0].main,
      })
    })
    .catch (error => {
      console.log('По вашему запросу ничего не найдено...');
    }) 
  }

  return (
    <Main>
      <MainTitle>Get Weather</MainTitle>
      <Input gettingWeather={gettingWeather} />
      {weather.temp ? <Weather weather={weather} /> : <StartInfo />}
    </Main>
  );
}


const Main = styled.ScrollView`
  background: #546FD2;
  flex: 1;
  padding: 20px;
`;

const MainTitle = styled.Text`
  margin-top: 25px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;


