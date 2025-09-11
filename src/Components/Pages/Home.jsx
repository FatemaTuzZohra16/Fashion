import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import NameOfCategory from '../NameOfCategory/NameOfCategory'
import Bannar from '../Bannar/Bannar'
import Category from '../Category/Category'
import NewArrivals from '../NewArrivals/NewArrivals'
import Mission from '../Mission/Mission'
import Favorites from '../Favorites/Favorites'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <NameOfCategory />
            <Bannar />
            <Category />
            <NewArrivals />
            <Mission />
            <Favorites />
        </div>
    )
}

export default Home