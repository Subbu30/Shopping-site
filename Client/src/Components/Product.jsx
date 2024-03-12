import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//import { products } from '../data'
import Products from './Products'
import axios from "axios"


const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
flex-wrap: wrap;
`

const Product = ({ category, filters, sort }) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(category
          ? `http://localhost:3000/api/products?category=${category}`
          : "http://localhost:3000/api/products")
        //console.log(res)
        setProducts(res.data)

      } catch (err) {

      }
    }

    getProducts()

  }, [category])


  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
         )

      );

  }, [products, category, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === "dec") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price))
    }

  }, [sort])

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Products item1={item} key={item.id} />)
        : products.slice(0, 8).map((item) => <Products item1={item} key={item.id} />) //Slice method to display only 8 products in HOME page
      }
    </Container>
  )
}

export default Product
