import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import NameOfCategory from '../NameOfCategory/NameOfCategory'
import Bannar from '../Bannar/Bannar'
import Category from '../Category/Category'
import NewArrivals from '../NewArrivals/NewArrivals'
import Mission from '../Mission/Mission'
import Favorites from '../Favorites/Favorites'
import Users from '../Users/Users'
import Review from '../Review/Review'
import HolidayGift from '../HolidayGift/HolidayGift'
import Everlane from '../Everlane/Everlane'
import Shipping from '../Shipping/Shipping'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <NameOfCategory />
            <Bannar />
            <Category />
            <NewArrivals />
            <Mission />
            <Favorites />
            <Review />
            <HolidayGift />
            <Everlane />
            {/* <Users /> */}
            <Shipping />
            <Footer />
        </div>
    )
}

export default Home