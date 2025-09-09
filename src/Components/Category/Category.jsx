import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'

const Category = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(' https://api.escuelajs.co/api/v1/categories')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching data:", err))
    }, [])
    return (
        <div className='font-primary py-[90px]'>
            <Container>
                <div>
                    <h1 className='text-[24px] leading-[33px] text-center mb-[25px]'>Shop by Category</h1>
                    <div className='flex flex-wrap justify-between'>
                        {
                            products.slice(0,5).map((item) => (
                                <div key={item.id}>
                                    <img src={item.image} alt={item.name} width="250" />
                                    <h3 className='text-[14px] leading-[20px] mt-3 border-b inline-block'>{item.name}</h3>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Category