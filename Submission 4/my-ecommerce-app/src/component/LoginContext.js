import React from 'react';

const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };