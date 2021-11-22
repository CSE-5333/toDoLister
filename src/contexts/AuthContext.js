import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}){
    const [currentUser, setcurrentUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setcurrentUser(user)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])


    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    const value = {
        currentUser,
        register,
        login,
        logout,

    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}