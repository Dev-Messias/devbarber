import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
   Container, 
   InputArea,
   CustomButton,
   CustomButtonText,
   SignMessageButton,
   SignMessageButtonText,
   SignMessageButtonTextBold 
  } from './styles';

  import Api from '../../Api';

  import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/svg/barber.svg';
import EmailIcon from '../../assets/svg/email.svg';
import LockIcon from '../../assets/svg/lock.svg';

export default () => {

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState(''); 
  const [passwordField, setPasswordField] = useState('');

  //Redirecionando para pagina de cadastro, sem permitir que ele retorne.
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }

  const handleSignClick = async () => {
    if(emailField != '' && passwordField != ''){
       /* let json = await Api.signIn(emailField, passwordField);


        if(json.token){
            alert("Deu Certo!");
        }else{
          alert('E-mail e/ou senha errados!');
        }*/
        navigation.reset({
          routes: [{name: 'MainTab'}]
        });
    }else{
      alert("Preencha os Campos!")
    }
  }

  return(
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        
        <SignInput 
          IconSvg={EmailIcon} 
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t=>setEmailField(t)}
        />
        <SignInput 
          IconSvg={LockIcon} 
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick} >
            <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick} >
          <SignMessageButtonText>Ainda não possui uma conta? </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

    </Container>
  );
}