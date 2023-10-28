// src/components/LoginPage.js
import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
  

  display: inline-flex;
padding: 40px 40px 40px 142px;
justify-content: flex-end;
align-items: center;
gap: 147.781px;
background: #FFF;


@media (max-width: 768px) {
  flex-direction: column;
}
`;

const ImageContainer = styled.div`
background: url('https://i.im.ge/2023/10/28/tHMfnT.girl.jpg');
  flex: 1;
 
  width: 343.219px;
  height: 433.601px;
  flex-shrink: 0;
  background-size: cover;


  @media (max-width: 768px) {
    height: 40vh;
    flex: 1;
 
  width: 343.219px;
  height: 433.601px;
  }
`;

const FormContainer = styled.div`
width: 824px;
height: 488px;
flex-shrink: 0;
padding-left:111px;


@media (max-width: 768px) {
  width: 424px;
height: 288px;
}
`;

const LoginPage = () => {
  return (
    <Container>
      <ImageContainer >
     
      </ImageContainer>
      <FormContainer>
        <Login/>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
