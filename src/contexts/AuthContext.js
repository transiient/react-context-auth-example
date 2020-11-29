import { createContext } from "react";

const AuthContext = createContext({
    isSignedIn: false,
    token: null,
    signIn: () => {},
    signOut: () => {},
});

export default AuthContext;
