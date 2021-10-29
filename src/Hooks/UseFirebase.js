import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import travelAuthentication from '../Firebase/Firebase.init';

travelAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState([])

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const gogoleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
        
    },[])

    return {
        user,
        gogoleSignIn
    }
   
};

export default UseFirebase;