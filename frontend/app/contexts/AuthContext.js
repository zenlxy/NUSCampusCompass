import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Create a context for authentication
const AuthContext = createContext();

// Export the custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to user state changes
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to handle user logout
    const logout = () => {
        return auth.signOut();
    };

    // Value provided to context consumers
    const value = {
        user,
        signup,
        login,
        logout,
    };

    // Only render children when not loading
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};