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
import UserIcon from '../../assets/svg/person.svg';
import EmailIcon from '../../assets/svg/email.svg';
import LockIcon from '../../assets/svg/lock.svg';

export default () => {

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState(''); 
  const [passwordField, setPasswordField] = useState('');

  //Redirecionando para pagina de cadastro, sem permitir que ele retorne.
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  const handleSignClick = async () => {
    if(nameField != '' && emailField != '' && passwordField != ''){
     /* let res = await Api.singUp(nameField, emailField, passwordField);
      alert("Cadastro realizado com sucesso!!")*/
      navigation.reset({
        routes: [{name: 'MainTab'}]
      });
    }else{
      alert("Preencha os campos!");
    }
  }

  return(
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>

        <SignInput 
            IconSvg={UserIcon} 
            placeholder="Digite seu nome"
            value={emailField}
            onChangeText={t=>setEmailField(t)}
        />
        
        <SignInput 
          IconSvg={EmailIcon} 
          placeholder="Digite seu e-mail"
          value={nameField}
          onChangeText={t=>setNameField(t)}
        />
        <SignInput 
          IconSvg={LockIcon} 
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick} >
            <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick} >
          <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
          <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
        </SignMessageButton>

    </Container>
  );
}