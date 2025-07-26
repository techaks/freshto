import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider=({ children }) => {

    const [user,setUser] = useState(2);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false)


    const value={
        user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin


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

