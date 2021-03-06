import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import DIcon from '../assets/avatarBarbeiro.jpg';

import Stars from '../components/Stars';

const Area = styled.TouchableOpacity`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px
`;
const InforArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;



export default ({data}) => {

  const navigation = useNavigation();

  const handleClick = () => {
      navigation.navigate('Barber', {
        id: 2,
        name: 'Nome Barbeiro',
        stars: starsNota
      });
  }

  const starsNota = 5.1;

  return(
    <Area onPress={handleClick}>
      <Avatar source={DIcon} />
      <InforArea>
        <UserName>Barbearia</UserName>
        
        <Stars  stars={starsNota} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InforArea>
    </Area>
  );
}