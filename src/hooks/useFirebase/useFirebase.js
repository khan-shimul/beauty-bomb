import { useEffect, useState } from "react";
import initializeFirebase from "../../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// initialize the firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    // Register New User
    const registerNewUser = (email, pass, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                // setUser(user);
                setAuthError('');
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Login existing user
    const loginUser = (email, pass, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setUser(userCredential.user)
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // Observer user State change or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unSubscribe;
    }, [])

    // Logout user
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    };

    return {
        user,
        loading,
        authError,
        registerNewUser,
        loginUser,
        logout,
    };

}

export default useFirebase;