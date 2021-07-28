import React, { useState, useEffect, useContext, createContext } from "react";
import firebaseClient from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import nookies from 'nookies'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // firebaseClient();
    const [user, setUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            console.log("auth changed");
            console.log(user ? user.id : "Nothing");
            if (!user) {
                setUser(null);
                nookies.set(undefined, "token", "", {});
                return;
            }

            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, "token", token, {});

        });
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
