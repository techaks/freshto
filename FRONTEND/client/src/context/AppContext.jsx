import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider=({ children }) => {

    const [user,setUser] = useState(2);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false);
    const [product,setProduct] = useState([]);

    const fetchProducts = async () => {
        setProduct(dummyProducts)
    }

    useEffect(()=>{
    fetchProducts();
    },[])


    const value={
        user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin,product


    }



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const UseAppContext = () => {
    return useContext(AppContext);
}

