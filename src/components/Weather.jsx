import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome5, Feather, Foundation } from '@expo/vector-icons';

export default function Weather({ weather }) {

  const { city, temp, country, error, weatherDay, 
    pressure, feelsLike, windSpeed, tempMax, tempMin } = weather;

  
  return (
    <View>
      {temp && <View style={{marginTop: 50}}>
        <View style={{alignItems: 'center'}}>
          <City>{city}, {country}</City>
          <Temp>{temp}°</Temp>
          {weatherDay === 'Clouds' ? 
            <TinyLogo
              source={require(`../assets/img/Clouds.png`)}
            /> 
          : weatherDay === 'Rain' ? 
            <TinyLogo
              source={require('../assets/img/Clear.png')}
            />
            : weatherDay === 'Snow' ? 
              <TinyLogo
                source={require('../assets/img/Snow.png')}
              />
              : 
                <TinyLogo
                  source={require('../assets/img/Clear.png')}
                />}
        </View>
        <LineBlock />
        <View>
          {/* Max temperature */}
          <Block>
            <FontAwesome5 name="temperature-high" size={20} color="white" />
            <WhiteText>Max temperature: {tempMax}°</WhiteText>
          </Block>
          {/* Min temperature */}
          <Block>
          <FontAwesome5 name="temperature-low" size={20} color="white" />
            <WhiteText>Min temperature: {tempMin}°</WhiteText>
          </Block>
          {/* Feels Like */}
          <Block>
            <FontAwesome5 name="temperature-high" size={20} color="white" />
            <WhiteText>Feels Like: {feelsLike}°</WhiteText>
          </Block>
          {/* Pressure */}
          <Block>
            <Foundation name="arrows-compress" size={20} color="white" />
            <WhiteText>Pressure: {pressure} Pa</WhiteText>
          </Block>
          {/* Wind Speed */}
          <Block>
            <Feather name="wind" size={20} color="white" />
            <WhiteText>Wind Speed: {windSpeed} m/s</WhiteText>
          </Block>
        </View>
      </View>}
    </View>
  );
}


const City = styled.Text`
  align-items: center;
  font-size: 40px;
  color: #FFFFFF;
`;

const Temp = styled.Text`
  align-items: center;
  font-size: 90px;
  color: #FFFFFF;
`;

const TinyLogo = styled.Image`
  align-items: center;
  width: 80px;
  height: 80px;
`;

const WhiteText = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-left: 7px;
`;

const Block = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const LineBlock = styled.View`
  width: 100%;
  height: 2px;
  background: #fff;
  opacity: 0.2;
  margin-top: 10px;
  margin-bottom: 20px;
`;