import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase'
import { signin } from './redux/slices/userSlice';

const AuthContext = React.createContext();

// we will maintain a user state variable and provide it to entire component using React Context


export function AuthProvider({children}){
    
    const [user, setUser] = useState();

    const login = (data) =>{
        signin(data)
    }

    const logout = () =>{
        
    }

    const value = {
        user,
        signup
    }
    
    return(
        <AuthContext.Provider value={value}>
           {children} 
        </AuthContext.Provider>
    )
}


export function useAuth(){
    return useContext(AuthContext)
}
