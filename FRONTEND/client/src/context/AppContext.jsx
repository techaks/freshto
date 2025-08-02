import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND ;
axios.defaults.withCredentials = true;

export const AppContext = createContext();

export const AppContextProvider=({ children }) => {

    const [user,setUser] = useState(null);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
//    console.log(cartItems);

   
     const fetchProduct = async()=>{
        try {
            const {data} = await  axios.get('/api/product/list');
            if(data.success){
                console.log(data)
                setProducts(data.products);
            }
            
        } catch (error) {
            console.log(error)
        }

    }
 //seler login check
    const isLogin = async()=>{
        try {
            const {data} =await axios.post('/api/seller/is-auth');
            if(data.success){
                setIsSeller(true)
            }else setIsSeller(false)
            
        } catch (error) {
            console.log(error);
            setIsSeller(false)
            
        }
    }

    //userlogin check

    const isUserLogin =async()=>{
        try {
            const {data} = await axios.get('/api/user/is-auth');
            if(data.success){
                setUser(data.user)
                console.log(data.user);
                setCartItems(data.user.cartItems)
                
            }else  setUser(false)
            
        } catch (error) {
             console.log(error);
            setUser(false)
        }

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

    //update user cart

    useEffect(()=>{
        const fetchCart = async ()=>{
            try {
                const {data} = await axios.post('/api/cart/update',{cartItems})
                console.log('data');
            if(! data.success){
                
                
                toast.error(data.message);
            }
                
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

     if(user) fetchCart();

    },[cartItems])



    useEffect(()=>{
    fetchProduct();
    isLogin();
    isUserLogin();
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
            const productItem = products.find((prod) => prod._id === item);
            if(productItem){
                total += productItem.offerPrice * cartItems[item];
            }
        }
        return Math.floor(total);
    }

    


    const value={
        user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin,products
     , addToCart,updateCartQuantity,removeFromCart,cartItems,searchQuery, setSearchQuery , countCartItems , totalCartPrice , axios , fetchProduct

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

