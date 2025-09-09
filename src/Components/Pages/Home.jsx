import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import NameOfCategory from '../NameOfCategory/NameOfCategory'
import Bannar from '../Bannar/Bannar'
import Category from '../Category/Category'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <NameOfCategory />
            <Bannar />
            <Category />
        </div>
    )
}

export default Home