import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
  
`
const Wrapper = styled.div`
   padding:20px 
     
`
const Title = styled.h1`
  margin-bottom: 20px ;
  font-weight: 300;
  text-align: center;
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopButton = styled.button`
padding:10px;
background-color: ${props => props.type === "filled" ? "black" : "white"};
color: ${props => props.type === "filled" ? "white" : "black"};
cursor: pointer;

&:hover{
    transform:scale(1.1);
}
`
const TopTextContainer = styled.div`
    
`
const TopText = styled.span`
    margin: 10px;
    cursor: pointer;
    text-decoration: underline;
`

const BottomContainer = styled.div`
margin-top: 10px;
display:flex;
justify-content: space-between  ;
    
`
const Info = styled.div`
  flex:3;  
`
const Product = styled.div`
display:flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
display:flex;
flex:2;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.span`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const PriceContainer = styled.div`
display:flex;
padding:20px;
`
const ProductQuantity = styled.div`
width:20px;
justify-content: center;
display: flex;
border:1px solid gray;
border-radius: 7px;
`
const ProductPrice = styled.div`
font-size: 25px;
font-weight: 100;
`
const Summary = styled.div`
    flex:1;
    border:1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height:50vh
`
const SummaryContainer = styled.div`
display: flex;
justify-content: space-between;
margin:10px 0;
font-weight: ${props => props.type === "total" && "800"};
font-size: ${props => props.type === "total" && "20px"};

`
const SummaryTitle = styled.h1`
font-weight: 100;
`
const SummaryText = styled.span``

const SummaryAmount = styled.span``

const Button = styled.button`
width:100%;
background-color: black;
color:white;
font-weight: 600;
padding:10px;
cursor:pointer;
`


const Cart = () => {

    const cart = useSelector(state => state.cart)

    console.log(cart)


    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>Your Bag</Title>
                <TopContainer>
                    <Link to='/'>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>

                    <TopTextContainer>
                        <TopText>Sopping Bag(2)</TopText>
                        <TopText>Your Wishlist(3)</TopText>
                    </TopTextContainer>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>

                </TopContainer>
                <BottomContainer>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product: </b>{product.title}</ProductName>
                                        <ProductID><b>ID: </b>{product._id}</ProductID>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>

                                <PriceDetail>
                                    <PriceContainer>
                                        <Add />
                                        <ProductQuantity>{product.quantity}</ProductQuantity>
                                        <Remove />
                                    </PriceContainer>
                                    <ProductPrice>Rs {product.quantity * product.price} </ProductPrice>
                                </PriceDetail>
                            </Product>

                        ))}


                    </Info>

                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryContainer>
                            <SummaryText>Sub Total:</SummaryText>
                            <SummaryAmount>Rs {cart.total}</SummaryAmount>
                        </SummaryContainer>
                        <SummaryContainer>
                            <SummaryText>Estimated Shipping:</SummaryText>
                            <SummaryAmount>Rs 55</SummaryAmount>
                        </SummaryContainer>
                        <SummaryContainer>
                            <SummaryText>Discount:</SummaryText>
                            <SummaryAmount>Rs -55</SummaryAmount>
                        </SummaryContainer>
                        <SummaryContainer type="total">
                            <SummaryText>Total:</SummaryText>
                            <SummaryAmount>Rs {cart.total}</SummaryAmount>
                        </SummaryContainer>
                        <Button>CHECKOUT NOW</Button>

                    </Summary>
                </BottomContainer>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart
