import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || users?.email
            const loggedUser = { email: userEmail }
            setUsers(currentUser);
            setLoading(false)
            if (currentUser) {
                axios.post('https://car-doctor-server-liard-nu.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else{
                axios.post('https://car-doctor-server-liard-nu.vercel.app/logout', loggedUser, { withCredentials: true })
                .then(res=> {
                    console.log(res.data)
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        users,
        loading,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;