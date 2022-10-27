import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // Register authentication
    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Update profile
    const profileUpdate = (profileInfo)=>{
        return updateProfile(auth.currentUser, profileInfo)
    }
    // Email verify
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser)
    }
    // Login authentication
    const login = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    // logout authentication 
    const logOut = ()=>{
        return signOut(auth)
    }
    // Google sign in
    const googleSign = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    // Facebook sign in
    const facebookLogIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    // Get the currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe()
        }
    },[])
    const authInfo = {user, register, profileUpdate, verifyEmail, login, logOut, googleSign, facebookLogIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;