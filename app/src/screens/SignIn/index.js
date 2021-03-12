import React, {useState} from 'react';
import {Text} from 'react-native'
import {
   Container, 
   InputArea,
   CustomButton,
   CustomButtonText,
   SignMessageButton,
   SignMessageButtonText,
   SignMessageButtonTextBold 
  } from './styles';

  import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/svg/barber.svg';
import EmailIcon from '../../assets/svg/email.svg';
import LockIcon from '../../assets/svg/lock.svg';

export default () => {

  const [emailField, setEmailField] = useState(''); 
  const [passwordField, setPasswordField] = useState('');

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

        <CustomButton>
            <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
          <SignMessageButtonText>Ainda não possui uma conta? </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

    </Container>
  );
}