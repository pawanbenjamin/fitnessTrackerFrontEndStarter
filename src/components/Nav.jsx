import React, { useState } from "react";
import { LoginSignUp } from "./users"

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
    const [token, setToken] = useState("")
    return (
        <div>
            <LoginSignUp 
                   isLoggedIn={isLoggedIn}
                   setIsLoggedIn={setIsLoggedIn}
                   token={token}
                   setToken={setToken}
            />
        </div>
    )
}

export default Nav