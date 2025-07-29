import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider=({ children }) => {

    const [user,setUser] = useState(null);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false);
    const [product,setProduct] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
//    console.log(cartItems);
   
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
        toast.success("Item added to cart");
     
        console.log(cartData);

    }
    //update cart quantity
    const updateCartQuantity = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] = quantity;
            setCartItems(cartData);
           toast.success("Cart updated");
        }else{
            toast.error("Item not found");
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
            toast.success("Item removed ");
    }



    useEffect(()=>{
    fetchProducts();
    },[])


    //count cart items

    const countCartItems = () => {
        let count = 0 ;
        for(const item in cartItems){
            count += cartItems[item];
        }
        return count;

    }

    //total cart price
    const totalCartPrice = () => {
        let total = 0 ; 
        for(const item in cartItems){
            const productItem = product.find((prod) => prod._id === item);
            if(productItem){
                total += productItem.offerPrice * cartItems[item];
            }
        }
        return Math.floor(total);
    }

    


    const value={
        user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin,product
     , addToCart,updateCartQuantity,removeFromCart,cartItems,searchQuery, setSearchQuery , countCartItems , totalCartPrice

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

