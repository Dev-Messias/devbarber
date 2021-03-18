import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
   Container,
   Scroller,

   HeaderArea,
   HeaderTitle,
   SearchButton,

   LocationArea,
   LocationInput,
   LocationFinder,
   ListArea,

  } from './styles';

  import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/svg/search.svg';
import MyLocationIcon from '../../assets/svg/my_location.svg';

export default () => {

  const navigation = useNavigation();

  return(
    <Container>
      <Scroller>
        <HeaderArea>

          <HeaderTitle numberOfLines={2} >Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')} >
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput 
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>
        
        <ListArea>
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
            <BarberItem  />
        </ListArea>

      </Scroller>
    </Container>
  );
}