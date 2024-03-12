import React, { useState } from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'
import Footer from '../Components/Footer'
import Navbar from "../Components/Navbar"
import Newsletter from '../Components/Newsletter'
import Product from '../Components/Product'
import { useLocation } from 'react-router'

const Container = styled.div`

`
const Title = styled.h1`
margin:10px;
`
const FilterContainer = styled.div`
margin:10px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display:flex;
`
const FilterText = styled.div`
font-weight: 600;
padding:10px;
`
const Select = styled.select`
margin-left: 10px;
padding:10px;
    
`
const Options = styled.option`
    
`


const ProductList = () => {

    const UrlLocation = useLocation();
    const ItemCategory = UrlLocation.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const fValue = e.target.value;
        setFilters({ ...filters, [e.target.name]: fValue })

    }

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    //console.log(filters)
    //console.log(sort)

    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>{ItemCategory}</Title>
            <FilterContainer>
                <Filter name="color" onChange={handleFilters}>
                    <FilterText>Filter:</FilterText>
                    <Select>
                        <Options disabled>color</Options>
                        <Options >red</Options>
                        <Options >white</Options>
                        <Options >blue</Options>
                        <Options >black</Options>
                        <Options >pink</Options>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Options disabled>size</Options>
                        <Options>XS</Options>
                        <Options>S</Options>
                        <Options>M</Options>
                        <Options>L</Options>
                        <Options>XL</Options>
                        <Options>XXL</Options>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select onChange={handleSort}>
                        <Options value="newest">Newest</Options>
                        <Options value="dec">Price High to Low </Options>
                        <Options value="asc">Price Low to High</Options>
                    </Select>
                </Filter>
            </FilterContainer>
            <Product category={ItemCategory} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default ProductList
