import React, { useState } from "react";
import { LoginSignUp } from "./users";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const [token, setToken] = useState("");
  return (
    <>
      <nav>
        <a>
          <LoginSignUp
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            token={token}
            setToken={setToken}
          />
        </a>
      </nav>
    </>
  );
};

export default Nav;
