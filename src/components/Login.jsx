// src/Login.js
import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  width: 824px;
height: 488px;
flex-shrink: 0;
border-radius: 12px;
background: #FFF;

`;

const LoginForm = styled.form`
width: 824px;
height: 488px;
flex-shrink: 0;

@media (max-width: 768px) {
  width: 224px;
height: 128px;
}

`;

const Input = styled.input`
width: 824px;
height: 56px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.40);

color: var(--Light-Color---1, #737B86);

/* Placeholder - Regular - 18 */
font-family: 'DM Sans', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 110%; /* 19.8px */


`;
const H2 = styled.h2`
color: var(--Text-color, #04072F);
text-align: center;

/* Heading 1 - Bold - 48 */
font-family: 'DM Sans', sans-serif;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 52.8px */


`;

const Button = styled.button`
  width: 538px;
  height:56px;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;color: var(--Text-color, #04072F);
text-align: center;


`;

const Label = styled.label`
color: var(--Text-color, #04072F);
text-align: start;
display:flex;


/* Label - Medium - 18 */
font-family: 'DM Sans', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 110%; /* 19.8px */
`;



const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <H2 type='h2'>Login</H2>
        <Label type="label">Login ID</Label>
        <br />
        <Input type="text" placeholder="Enter Login ID" />
        <br />
        <br />
        <Label type="label">PassWord</Label>
        <br />
        <Input type="password" placeholder="Enter Password" />
        <br />
        
        <input style={{textAlign:"start",display:"flex"}} type="checkbox" />
        <label style={{textAlign:"start",display:"flex"}} htmlFor="">Remember Me</label> <br />
        <input style={{textAlign:"start",display:"flex"}} type="checkbox" />
        <label style={{textAlign:"start",display:"flex"}} htmlFor="">Agree to <span style={{
            color: "var(--Secondary---1, #F78719)",textDecorationLine:"underline"
            
            
        }}>Terms & Conditions</span></label> 
        <br />

        <Button type="submit" style={{color:"#fff",fontSize:"18px",fontWeight:"500"}}>Login</Button>
        <br />
        <h4 style={{color:"#04072F"}}>Don’t have an account? <span style={{color:"#F78719",textDecorationLine:"underline"}}>Register Here</span></h4>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
