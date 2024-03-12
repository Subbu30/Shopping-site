import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
flex:1;
margin:3px;
height:80vh;
position: relative;
`

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const Info = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
padding: 10px;
border: none;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 700;

&:hover{
  transform: scale(1.1);
}

`

const CategoryItem = ({item1}) => {
  return (
    <Container>
      <Link to={`/products/${item1.cat}`}>
      <Image src={item1.img}/>
      <Info >
        <Title >{item1.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>

  )
}

export default CategoryItem
