import React, { createContext, useState } from 'react';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [users, setusers] = useState(null)

    const shareData = {
        users
    }
    return (
        <authContext.Provider value={shareData}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;