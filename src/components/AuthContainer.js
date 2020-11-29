import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function AuthContainer() {
    const authContext = useContext(AuthContext);
    const isSignedIn = authContext.isSignedIn;

    const handleSignIn = () => {
        //* Call an API for sign in

        //* Get response (this is just a fake response)
        const data = {
            token: "7nssnj4vtynsvtys4vtyns4vtns4vks",
        };

        authContext.signIn(data.token);
    };

    const handleSignOut = () => {
        authContext.signOut();
    };

    return (
        <div>
            <p>Hello!</p>

            {!isSignedIn ? (
                <>
                    <button className='signin' onClick={handleSignIn}>
                        Sign In
                    </button>
                    <button className='signup'>Sign Up</button>
                </>
            ) : (
                <button className='signout' onClick={handleSignOut}>
                    Sign Out
                </button>
            )}
        </div>
    );
}

export default AuthContainer;
