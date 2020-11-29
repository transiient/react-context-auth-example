import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function ProtectedResource() {
    const authContext = useContext(AuthContext);

    return (
        authContext.isSignedIn && (
            <div>
                <p>You shouldn't be seeing this bit of text, unless you're signed in!</p>
            </div>
        )
    );
}

export default ProtectedResource;
