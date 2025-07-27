import React from 'react'
import MainBanner from '../component/MainBanner'
import Categories from '../component/Categories'
import Bestseller from '../component/Bestseller'
import Delivery from '../component/Delivery'


const Home = () => {
  return (
    <div className='px-15'>
      
        <MainBanner/>
        <Categories/>
        <Bestseller/>
        <Delivery/>


      
    </div>
  )
}

export default Home
