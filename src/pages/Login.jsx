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
background-size:cover;
display:flex;
align-items: center;
justify-content: center;

`;

const Wrapper = styled.div`
width:30%;
padding:20px;
background-color:white;

`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;

const Form = styled.form`
display: flex;
flex-direction:column;

`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`;

const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-docoration:underline;
cursor:pointer;

`;
const Login = () => {
  return (
    <Container>
     <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
       <Link>Forgot Password</Link>
       <Link>Create a new Account</Link>

        </Form>
     </Wrapper>
    </Container>
  )
}

export default Login
