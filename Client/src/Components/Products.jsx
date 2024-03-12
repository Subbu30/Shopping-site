import React from 'react'
import styled from 'styled-components'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Info = styled.div`
 display: flex;
 top:0;
 left:0;
 width:100%;
 height: 100%;
 position: absolute;
 align-items: center;
justify-content: center;
opacity: 0;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    display: flex;
    min-width: 280px;
    height: 280px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color:#E0EDFC;

    &:hover ${Info}{
        opacity: 1;
        background-color: rgba(0,0,0,0.2);
    }
`
const Image = styled.img`
 height:100% ;
 overflow: hidden;
`

const Icon = styled.div`
background-color: white;
opacity:0.8;
height:50px;
width:50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin:8px;

&:hover{
    transform:scale(1.1);
}
`



const Products = ({ item1 }) => {
    return (
        <Container >
            <Image src={item1.img}></Image>
            <Info>
                <Link to ={`/product/${item1._id}`}>
                    <Icon><SearchOutlined /></Icon>
                </Link>

                <Icon><FavoriteBorderOutlined /></Icon>
                <Icon><ShoppingCartOutlined /></Icon>
            </Info>
        </Container>
    )
}

export default Products
