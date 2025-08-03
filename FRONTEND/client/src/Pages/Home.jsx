import React from 'react'
import MainBanner from '../component/MainBanner'
import Categories from '../component/Categories'
import Bestseller from '../component/Bestseller'
import Delivery from '../component/Delivery'
import Spinner from '../component/Spinner'
import { UseAppContext } from '../context/AppContext'


const Home = () => {
    const {products} = UseAppContext();
  return (
    <div className='px-15'>
      
        <MainBanner/>
        <Categories/>

        {
          products ? <Bestseller/> : <Spinner/>
        }

        

        <Delivery/>


      
    </div>
  )
}

export default Home
