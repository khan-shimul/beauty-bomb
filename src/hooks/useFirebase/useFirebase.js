import { useEffect, useState } from "react";
import initializeFirebase from "../../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// initialize the firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // Register New User
    const registerNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    // Login existing user
    const loginUser = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    // Observer user State change or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unSubscribe;
    }, [])

    // Logout user
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };

    return {
        user,
        registerNewUser,
        loginUser,
        logout

    };

}

export default useFirebase;