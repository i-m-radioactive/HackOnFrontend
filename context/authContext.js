import React, { useState, useEffect, useContext, createContext } from "react";

import { onAuthStateChanged, auth } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        return onAuthStateChanged(auth, async (user) => {

            if (!user) {
                setUser(null);
                localStorage.setItem("_token", "");
                return;
            }

            const token = await user.getIdToken();
            setUser(user);
            localStorage.setItem("_token", token);
        });

    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
