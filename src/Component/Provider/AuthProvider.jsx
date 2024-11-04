import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';


export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [users, setusers] = useState(null)
    const [loadding, setloadding] = useState(true)
    const provider = new GithubAuthProvider();
    const githubauthentication = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const googleauthentication = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const signupAccount = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signinAcount = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        setloadding(true)
        return signOut(auth);
    };

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
        logoutUser,
        githubauthentication,
        googleauthentication,
    }
    return (
        <authContext.Provider value={shareData}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;