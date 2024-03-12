import React from 'react'
import Announcements from '../Components/Announcements'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Product from '../Components/Product'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider  />
            <Categories  />
            <Product  />
            <Newsletter  />
            <Footer  />
        </div>
    )
}

export default Home
