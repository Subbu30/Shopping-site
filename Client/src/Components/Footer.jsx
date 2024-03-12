import React from 'react'
import styled from 'styled-components'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Container = styled.div`
display: flex;
justify-self: center;
align-items: center;
padding:20px;
height:30vh;
`

const Left = styled.div`
flex:1;
margin:10px;
`

const Logo = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    
`
const Desc = styled.p`
    color:gray;
    
`


const Center = styled.div`
flex:1;
margin:10px;
`
const Title = styled.h1`
margin-bottom: 20px;
font-size: 25px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
    
`
const ListItems = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
    
`

const Right = styled.div`
flex:1;
margin:10px;
`
const SocialContainer = styled.div`
    display:flex;
    margin-bottom: 10px;
`
const Payment = styled.img`
    display:flex;
    width:50%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shoppee.</Logo>
            <Desc>Be it clothing, footwear or accessories, Shoppee offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</Desc>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Your Orders</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Wristlist</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Women Fashion</ListItems>                              
                <ListItems>Terms</ListItems>
            </List>

        </Center>
        <Right>
            <Title>Contact Us.</Title>
            <SocialContainer><LocationOnIcon style = {{marginRight:"10px"}}/> 22 ,White Field, Banglore, India, 560010</SocialContainer>
            <SocialContainer><CallIcon style = {{marginRight:"10px"}}/> 080 2334455</SocialContainer>
            <SocialContainer><MailOutlineIcon style = {{marginRight:"10px"}}/> contact@shoppie.com</SocialContainer>
            <Payment src="/images/PaymentOption.jpg "/>       
        </Right>
      
    </Container>
  )
}

export default Footer
