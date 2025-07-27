import React, { useEffect, useState } from 'react'
import { UseAppContext } from '../context/AppContext';
import ProductCard from '../component/ProductCard';
import NoFound from '../component/NoFound';


const AllProduct = () => {

    const { product , searchQuery } = UseAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(()=>{
        if (searchQuery.trim() !== "") {
            const filtered = product.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(product);
        }

    },[searchQuery, product]);



  return filteredProducts.length>0 ? (
    <div className='flex flex-col'>
        <p className='text-xl font-bold p-5 px-16'>All Products 👜 </p>
        <div className='flex flex-wrap gap-4 justify-center items-center mb-16'>
            {
                filteredProducts.filter((item)=>item.inStock).map((product,index) =><ProductCard product={product} key={index}/>  )
            }


        </div>
      
    </div>
  ):<NoFound/>
}

export default AllProduct
