import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth, db } from "../services/firebase";
import { useContext } from "react";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
       });

       return () => {
        unsubscribe();
       }
    },[]) 

    function signUp(email, passowrd) {
        createUserWithEmailAndPassword(auth, email, passowrd);
        setDoc(doc(db, "users", email), {
            favshows: [],
        })
    }

    function LogIn(email, passowrd) {
        signInWithEmailAndPassword(auth, email, passowrd);
    }

    function LogOut() {
        return signOut(auth);
    }

    return(
        <AuthContext.Provider value={{ user, signUp, LogIn, LogOut }}>
            {children}
        </AuthContext.Provider>
    );
    
}

export function UserAuth(){
    return useContext(AuthContext);
}