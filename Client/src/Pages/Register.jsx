import React from 'react'
import styled from 'styled-components'


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
`
const Input = styled.input`
margin: 10px;
 flex:1;
 min-width: 40%;
 padding:10px;
`
const Button = styled.button`
  margin: 10px 0 0 10px;
  padding:10px;
  border:none;
  cursor: pointer;
  background-color: teal;
  color:white;

  &:hover{
    background-color: #009999;
  }

`


const Register = () => {
  return (
    <Container>
  
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Button>CREATE ACCOUNT</Button>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
