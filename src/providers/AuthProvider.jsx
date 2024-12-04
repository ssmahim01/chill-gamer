import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const userInfo = {
        user,
        setUser,
        loading,
        loginWithGoogle,
        loginWithGithub,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        } 
    }, []);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;