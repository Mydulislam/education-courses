import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // Register authentication
    const register = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Update profile
    const profileUpdate = (profileInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profileInfo)
    }
    // Email verify
    const verifyEmail = ()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    // Login authentication
    const login = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    // logout authentication 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Google sign in
    const googleSign = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // Facebook sign in
    const facebookLogIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // Get the currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> {
            unsubscribe()
        }
    },[])
    const authInfo = {user,loading, register, profileUpdate, verifyEmail, login, logOut, googleSign, facebookLogIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;