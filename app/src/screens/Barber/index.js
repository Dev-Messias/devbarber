import React from 'react';
import Swiper from 'react-native-swiper';
import Stars from '../../components/Stars';
import { useNavigation } from '@react-navigation/native';

import FavoriteIcon from '../../assets/svg/favorite.svg';

import BackIcon from '../../assets/svg/back.svg';
import NavPrevIcon from '../../assets/svg/nav_prev.svg';
import NavNextIcon from '../../assets/svg/nav_next.svg';

import {
   Container ,
   Scroller,
   SwipeDot,
   SwipeDotActive,
   SwiperItem,
   SwiperImage,
   PageBody,
   UserInfoArea,
   ServiceArea,
   ServicesTitle,
   ServiceItem,
   ServiceInfo,
   ServiceName,
   ServicePrice,
   ServiceChooseButton,
   ServiceChooseBtnText,
   TestimonialArea,
   TestemonialItem,
   TestemonialInfo,
   TestemonialName,
   TestemonialBody,
   UserAvatar,
   UserInfo,
   UserInfoName,
   UserFavButton,
   BackButton
  
  } from './styles';

  import img1 from '../../assets/barbeiroPost1.png';
  import img2 from '../../assets/barbeiroPost2.jpg';
  import img3 from '../../assets/barbearia3.jpg';
  import img4 from '../../assets/barbeiroPost4.png';

  import avatarBarbeiro from '../../assets/avatarBarbeiro.jpg';

export default () => {

  const navigation = useNavigation();

  var photos = [img1, img2, img3, img4]

  const handleBackButton = () => {
      navigation.goBack();
  }


  return(
    <Container>
      <Scroller>
        <Swiper
          style={{height: 240}}
          dot={<SwipeDot />}
          activeDot={<SwipeDotActive />}
          paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
          autoplay={true}
        > 
          
          
            <SwiperItem >
              <SwiperImage source={img1} resizeMode="cover" />
            </SwiperItem>

            <SwiperItem >
              <SwiperImage source={img2} resizeMode="cover" />
            </SwiperItem>

            <SwiperItem >
              <SwiperImage source={img3} resizeMode="cover" />
            </SwiperItem>

            <SwiperItem >
              <SwiperImage source={img4} resizeMode="cover" />
            </SwiperItem>
        </Swiper>

        <PageBody>
          <UserInfoArea>
            <UserAvatar source={avatarBarbeiro} />
            <UserInfo>
              <UserInfoName>Messias Eu</UserInfoName>
              <Stars showNumber={true}/>
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon  width="24px" height="24px" fill="#FF0000" />
            </UserFavButton>
          </UserInfoArea>
          <ServiceArea>
            <ServicesTitle>Lista de Serviços</ServicesTitle>
            
            <ServiceItem  >
              <ServiceInfo>
                    <ServiceName>Corte de Cabelo</ServiceName>
                    <ServicePrice>R$ 20</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton>
                <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
              </ServiceChooseButton>
            </ServiceItem>

            <ServiceItem  >
              <ServiceInfo>
                    <ServiceName>Barba</ServiceName>
                    <ServicePrice>R$ 15</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton>
                <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
              </ServiceChooseButton>
            </ServiceItem>

            <ServiceItem  >
              <ServiceInfo>
                    <ServiceName>Combo Corte Cabelo + Barba</ServiceName>
                    <ServicePrice>R$ 30</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton>
                <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
              </ServiceChooseButton>
            </ServiceItem>

            <ServiceItem  >
              <ServiceInfo>
                    <ServiceName>Corte de Sobrancelia</ServiceName>
                    <ServicePrice>R$ 14,90</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton>
                <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
              </ServiceChooseButton>
            </ServiceItem>
          
            <ServiceItem  >
              <ServiceInfo>
                    <ServiceName>Corte Unha</ServiceName>
                    <ServicePrice>R$ 13,90</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton>
                <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
              </ServiceChooseButton>
            </ServiceItem>
          </ServiceArea>
          <TestimonialArea>
            <Swiper 
            style={{height: 110}}
            showsPagination={false}
            showsButtons={true}
            prevButton={<NavPrevIcon width="35" height="35" fill="#000000" />}
            nextButton={<NavNextIcon width="35" height="35" fill="#000000" />}
            
            >

              <TestemonialItem>
                <TestemonialInfo>
                  <TestemonialName>User_Name_1</TestemonialName>
                  <Stars showNumber={false}/>
                </TestemonialInfo>
                <TestemonialBody>
                  Texto do User ficara nesse formato, bla bla bla bla bla
                  Texto do User ficara nesse formato, bla bla bla.

                </TestemonialBody>
              </TestemonialItem>

              <TestemonialItem>
                <TestemonialInfo>
                  <TestemonialName>User_Name_2</TestemonialName>
                  <Stars showNumber={false}/>
                </TestemonialInfo>
                <TestemonialBody>
                  Texto do User ficara nesse formato, bla bla bla bla bla
                  Texto do User ficara nesse formato, bla bla bla.

                </TestemonialBody>
              </TestemonialItem>

              <TestemonialItem>
                <TestemonialInfo>
                  <TestemonialName>User_Name_3</TestemonialName>
                  <Stars showNumber={false}/>
                </TestemonialInfo>
                <TestemonialBody>
                  Texto do User ficara nesse formato, bla bla bla bla bla
                  Texto do User ficara nesse formato, bla bla bla.

                </TestemonialBody>
              </TestemonialItem>
              
            </Swiper>
          </TestimonialArea>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton} >
        <BackIcon width="44" height="44" fill="#FFFFFF" />
      </BackButton>
    </Container>
  );
}