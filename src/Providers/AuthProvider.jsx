import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    };

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client side
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo) 
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                        setLoading(false);
                    }
                })
            }
            else {
                //  remove token 
                localStorage.removeItem('access-token') ;
            }
                setLoading(false);
            // }
           
        });
        return () => {
            return unsubscribe();
        };


    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        logOut,
        updateUserProfile,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;