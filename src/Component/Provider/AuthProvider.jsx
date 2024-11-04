import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [users, setusers] = useState(null)
    const [loadding, setloadding] = useState(true)

    const signupAccount = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signinAcount = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, current => {

            setusers(current);
            setloadding(false)

            console.log("Current user: ", current);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const shareData = {
        users,
        loadding,
        signupAccount,
        signinAcount,
    }
    return (
        <authContext.Provider value={shareData}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;