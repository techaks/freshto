import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UseAppContext } from '../context/AppContext';


const NoFound = () => {
    const navigate = useNavigate();
    const {setSearchQuery} = UseAppContext();
  return (
    <div>
        <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div class="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
    <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" 
         alt="No results" 
         class="w-32 mx-auto mb-6 opacity-80" />

    <h2 class="text-2xl font-bold text-gray-800 mb-2">
      No Products Found
    </h2>

    <p class="text-gray-500 mb-6">
      We couldn’t find any products matching your search criteria. Try using different keywords.
    </p>

    <button onClick={()=>{navigate('/'); setSearchQuery('')}} class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-200">
      Go Back to Home
    </button>
  </div>
</div>

      
    </div>
  )
}

export default NoFound
