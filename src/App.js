import React, { useEffect, useState } from "react";

import AuthContainer from "./AuthContainer";
import ProtectedResource from "./ProtectedResource";

import AuthContext from "./AuthContext";

import "./App.css";

function App() {
    const [authToken, setAuthToken] = useState(null);
    const [authTokenExp, setAuthTokenExp] = useState(null);

    const signIn = (token, expiry) => {
        // Get expiry time
        const tokenExp = expiry || new Date(new Date().getTime() + 1000 * 60 * 60);

        // Set state
        setAuthToken(token);
        setAuthTokenExp(tokenExp);

        // Set localStorage data for login persistence
        localStorage.setItem(
            "user0",
            JSON.stringify({
                token,
                authTokenExp: tokenExp.toISOString(),
            })
        );
    };

    const signOut = () => {
        setAuthToken(null);
        setAuthTokenExp(null);
        localStorage.removeItem("user0");
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user0"));

        if (storedUser?.token && new Date(storedUser.authTokenExp) > new Date()) {
            signIn(storedUser.authToken, new Date(storedUser.authTokenExp));
        }

        // else, redirect to login page
    }, []);

    return (
        <AuthContext.Provider
            value={{ isSignedIn: !!authToken, token: authToken, signIn, signOut }}>
            <div className='App'>
                <header className='App-header'>
                    <h1>Authentication Demo</h1>

                    <AuthContainer />
                </header>

                <ProtectedResource />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
