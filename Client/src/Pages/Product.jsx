import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import RemoveIcon from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { useLocation } from 'react-router'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/cartSlice'



const Container = styled.div`

    
`
const Wrapper = styled.div`
  display:flex; 
  padding:20px; 
`
const ImgContainer = styled.div`
flex:1;
    
`
const Image = styled.img`
    background-color: #E0EDFC;
    width:100%;
    height:90vh;
`
const InfoContainer = styled.div`
    flex:1;
    margin:0 20px;

`
const ProductTitle = styled.h1`
font-weight: 200;
margin-bottom: 20px;
`
const Desc = styled.p`

`
const Price = styled.div`
    margin:20px 0;
    font-size:25px;
    font-weight: 75;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:50%;
`
const Filter = styled.div`
  display:flex; 
  align-items: center; 
`
const FilterText = styled.div`
 font-size: 20px;
    
`

const ColorOptions = styled.div`
   width:20px;
   height:20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0 5px;
   cursor: pointer;
`
const SelectSize = styled.select`
    padding:10px;
    margin-left: 10px;
`
const SizeOptions = styled.option`
    
`
const QuantityContainer = styled.div`
    display:flex;
    margin:20px 0;
    align-items: center;
`
const Quantity = styled.div`
    border:1px solid gray;
    border-radius: 10px;
    width:30px;
    height:30px;
    align-items: center;
    justify-content: center;
    display: flex;
`
const ButtonContainer = styled.div`
    
`
const Button = styled.button`
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
    padding: 10px;
    border-color: gray;
    border-width:1px;

    &:hover{
        border-width: 2px;
        border-color: black;
    }
`


const Product = () => {

    const location = useLocation()
    const productId = location.pathname.split("/")[2];

    const [product, setProduct] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const dispatch = useDispatch()
    
    useEffect(()=>{
        const getProductById = async ()=>{
            try{
                const res = await axios.get("http://localhost:3000/api/products/find/"+productId)
            //console.log(res.data)
            setProduct(res.data)
            }catch(err){

            }
            
        }
        getProductById()
    },[productId])

    const handleClick = () => {
        //update cart
        dispatch(addProduct({...product, quantity, color, size})) //here quantity is number of product quantity, not cart quantity
       
    }

    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <ProductTitle>{product.title}</ProductTitle>
                    <Desc>
                        {product.desc}
                    </Desc>
                    {/* <Desc>
                        Material: Cotton.
                    </Desc>
                    <Desc>
                        Wash: Machine Wash.
                    </Desc>
                    <Desc>
                        Distributor: Jack & Jones.
                    </Desc> */}
                    <Price>Rs {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color</FilterText>
                            {product.color?.map((c)=> (<ColorOptions color={c} key={c} onClick={()=>setColor(c)}/>))}
                            
                            
                        </Filter>
                        <Filter>
                            <FilterText>Size</FilterText>
                            <SelectSize>
                            {product.size?.map((s)=>  <SizeOptions onChange={()=>setSize(s)} key={s} >{s}</SizeOptions>)}
                                {/* <SizeOptions>XS</SizeOptions>
                                <SizeOptions>S</SizeOptions>
                                <SizeOptions>L</SizeOptions>
                                <SizeOptions>M</SizeOptions>
                                <SizeOptions>XL</SizeOptions> */}
                            </SelectSize>
                        </Filter>
                    </FilterContainer>

                    <QuantityContainer>
                        <RemoveIcon onClick={()=>{if (quantity > 1 )  {setQuantity(quantity-1)}}} />
                        <Quantity>{quantity}</Quantity>
                        <Add onClick={()=>setQuantity(quantity+1)} />
                    </QuantityContainer>

                    <ButtonContainer>
                        <Button>WISHLIST</Button>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </ButtonContainer>

                </InfoContainer>

            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product
