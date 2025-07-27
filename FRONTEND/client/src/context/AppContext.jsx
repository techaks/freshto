import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider=({ children }) => {

    const [user,setUser] = useState(null);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false);
    const [product,setProduct] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const fetchProducts = async () => {
        setProduct(dummyProducts)
    }
    //Add to cart function
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]+= 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData); 
        alert("Item added to cart");
        console.log(cartData);

    }
    //update cart quantity
    const updateCartQuantity = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] = quantity;
            setCartItems(cartData);
            alert("Cart updated successfully");
        }else{
            alert("Item not found in cart");
        }
    }
    //remove item from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;

            if(cartData[itemId] === 0)
            delete cartData[itemId];

        }

           setCartItems(cartData);
            alert("Item removed from cart");
    }



    useEffect(()=>{
    fetchProducts();
    },[])


    const value={
        user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin,product
     , addToCart,updateCartQuantity,removeFromCart,cartItems,searchQuery, setSearchQuery

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

