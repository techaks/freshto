import React, { useEffect, useState } from 'react'
import { UseAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import Spinner from '../Spinner';

const SellerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsSeller ,isSeller , axios} = UseAppContext();
    const navigate = useNavigate();
    const[loader,setLoader] = useState(false)

    const LoginHandel =async (e)=>{
       try {
         e.preventDefault();
         setLoader(true)
         const {data} = await axios.post('/api/seller/login',{email,password});

        //  console.log(data);

         if(data.success){
            toast.success(data.message)
            setIsSeller(true);
            navigate('/seller');

         }else{
            toast.error(data.response.data.message)
            setIsSeller(false)
         }


        
       } catch (error) {
        console.log(error)
        setIsSeller(false)
        toast.error(error?.response?.data?.message)
       }finally{
            setLoader(false)
         }
       
    }

    
    useEffect(()=>{
        if(isSeller)
          navigate('/seller')
    },[]);



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        
        
      <form className="bg-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">Welcome Back</h2>
    <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded  pl-2 gap-1">
        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
        <input className="w-full outline-none bg-transparent py-2.5 focus:text-blue-900 font-bold"
         type="email" 
         placeholder="Email" 
         value={email}
            onChange={(e)=>setEmail(e.target.value)}
        
        required />
    </div>
    <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
        </svg>
        <input className="w-full outline-none bg-transparent py-2.5 focus:text-blue-900 font-bold" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      
        type="password" placeholder="Password" required />
    </div>
   { loader ? 
    <div><Spinner/></div> : <button onClick={LoginHandel} type="submit" class="w-full mb-3 bg-[#59a835] hover:bg-[#74bb54] transition py-2.5 rounded text-white font-medium cursor-pointer">Log In</button>
   }
    
    
</form>


    </div>
  )
}

export default SellerLogin
