import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: 60vh;
    background-color: #F7EDA1;
`
const Title = styled.h1`
   font-size: 60px;
`
const Desc = styled.div`
    margin:20px;
`
const InputContainer = styled.div`
  width:40%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid;
  border-color:gray;
    
`
const Input = styled.input`
    flex:8;
    border:none;
    outline:none;
    padding-left: 10px;
`
const Button = styled.button`
    flex:1;
    background-color:#237111;
    color:white;
    cursor: pointer
`

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from your producrs.</Desc>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button><SendIcon /></Button>
        </InputContainer>
      
    </Container>
  )
}

export default Newsletter
