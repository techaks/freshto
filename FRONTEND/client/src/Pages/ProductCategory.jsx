import React from 'react'
import { useParams } from 'react-router-dom'
import { UseAppContext } from '../context/AppContext';
import { categories } from '../assets/assets';
import ProductCard from '../component/ProductCard';



const ProductCategory = () => {

    const {category} = useParams();
    const {products} = UseAppContext();

    const searchedCategory = categories.find((item)=>item.path.toLowerCase() === category.toLowerCase());
    console.log(searchedCategory);

    const filterProducts = products.filter((item)=>item.category.toLowerCase()===category.toLowerCase())
   
  return  filterProducts && (
    <div>

        <p className='font-bold text-xl mt-10 mx-10'>{searchedCategory.text}</p>
        <div className='flex gap-4  mb-20 mt-10 items-center justify-center flex-wrap'>

        
        {
            filterProducts.map((product , index)=><ProductCard product={product} key={index}/>)
        }

        </div>
      
    </div>
  )
}

export default ProductCategory
