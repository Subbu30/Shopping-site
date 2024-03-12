import styled from 'styled-components'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from "../data";
import { useState } from 'react';

const Container = styled.div`
width:100%;
height:100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"}; 
    cursor: pointer;  
    z-index :2 ;
`

const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transition: all 1s ease ;
        transform: translateX(${(props)=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
        display: flex;
        width:100vw;
        height: 100vh;
        align-items: center;  
        background-color: #${props => props.bg} ;
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height:80% ;
   
`

const InfoContainer = styled.div`
      flex: 1;
      padding:50px;  
       
`
const Description = styled.p`
margin: 50px 0px;
letter-spacing: 3px;
`
const Title = styled.h1`
font-weight: bold ;
font-size: 90x;

`
const Button = styled.button`
 padding: 20px;
 background-color: transparent;
 cursor: pointer;
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => { handleClick("left") }}>
                <ArrowBackIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer >
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>
                                {item.desc}
                            </Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => { handleClick("right") }}>
                <ArrowForwardIosIcon />
            </Arrow>


        </Container>
    )
}

export default Slider
