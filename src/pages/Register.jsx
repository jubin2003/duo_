import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url("https://img.freepik.com/free-photo/rows-hangers-with-clothes_23-2147669916.jpg?w=740&t=st=1704083877~exp=1704084477~hmac=9af6c3237240be77270c66b9ef734d1b7174abb4437d9e613862c0768d7af11e")
center;
display:flex;
align-items: center;
justify-content: center;

`;

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;

`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;


const Register = () => {
  return (
    <Container>
     <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
       <Agreement>
       By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
       </Agreement>
       <Button>CREATE ACCOUNT</Button>
        </Form>
     </Wrapper>
    </Container>
  )
}

export default Register
