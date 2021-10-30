import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import travelAuthentication from '../Firebase/Firebase.init';

travelAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const gogoleSignIn = () => {
      return signInWithPopup(auth, provider)
  
    }

    const userLogOut = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                const uid = user.uid
            }
            else {
                
            }
        })
        
    },[])

    return {
        user,
        gogoleSignIn,
        userLogOut
    }
   
};

export default UseFirebase;