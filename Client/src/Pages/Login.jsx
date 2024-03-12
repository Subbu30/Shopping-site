import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 background-image: url(/images/loginImage.jpg);
  background-size:cover;
  width:100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`
const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width:40%;
  padding:20px;
 
  
`
const Title = styled.h1`
text-align: center;
`
const Form = styled.form`
display: flex;
 flex-wrap: wrap;
 flex-direction: column;
`
const Input = styled.input`
margin: 10px;
 flex:1;
 min-width: 40%;
 padding:10px;
`
const Button = styled.button`
  margin: 10px 0 10px 10px;
  padding:10px;
  border:none;
  cursor: pointer;
  background-color: teal;
  color:white;


  &:hover{
    background-color: #009999;
  }

`
const Link = styled.a`
padding-left: 10px;
cursor: pointer;
font-size: 15px;
color: #4da6ff
`

const Login = () => {
    return (
        <Container>

            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input type="password" placeholder="Password" />
                   
                    <Button>LOGIN</Button>

                    <Link>Forgot Password?</Link>
                    <Link>Create an account?</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
