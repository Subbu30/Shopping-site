import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-image: linear-gradient(to right top, #38ab72, #47a669, #52a161, #5b9c5a, #629753);display: flex;
    color: white;
    font-weight: bold;
    font-size: 14px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Announcements = () => {
    return (
        <Container>
            Super Deal! FREE DELIVERY on order above Rs599.
        </Container>
    )
}

export default Announcements
