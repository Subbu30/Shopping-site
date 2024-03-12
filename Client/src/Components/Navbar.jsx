import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Container = styled.div`
height:60px;
background-color: white;
color: black;
${mobile({height:"50px"})}

`
const Wrapper = styled.div`
display: flex;
margin: 20px 20px;
align-items: center;
justify-content: space-between;
${mobile({margin:"10px 10px"})}

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.span`
font-size:15px;
${mobile({display:"none"})}
`
const SearchBar = styled.span`
border: 1px solid gray;
padding:5px;
display:flex;
margin-left: 25px;
${mobile({marginLeft:"5px"})}

`
const Input = styled.input`
border:none;
outline: none;
${mobile({width:"50px"})}

`

const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h5`
font-weight: bold;
font-size: 25px;
${mobile({fontSize:"20px"})}

`

const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({flex:2, justifyContent:"center"})}

`
const MenuItem = styled.div`
margin-left: 25px;
font-size: 15px;
cursor: pointer;
${mobile({fontSize:"13px",marginLeft:"15px"})}

`

const Navbar = () => {

const quantity = useSelector(state => state.cart.quantity) //quantity from redux slice



    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchBar>
                        <Input></Input>
                        <SearchIcon style={{color:"gray", fontSize:"16px"}}></SearchIcon>
                    </SearchBar>
                </Left>
                <Center>
                    <Logo>Shoppee</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOG IN</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="secondary">  
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

