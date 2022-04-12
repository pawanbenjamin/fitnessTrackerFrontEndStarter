import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";

const LoginSignUp = ({ isLoggedIn, setIsLoggedIn, setToken, username }) => {
  const clearToken = () => {
    //this will clear the token when you click the logout button -- see button below.
    setToken("");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  

  return (
    //if you're logged in, this will display a "logout" button. If not, displays options to create an account or login.
    <>
      {isLoggedIn ? (
        <div className="userFunctions">
          <h3 className="greeting">{`Welcome Back ${username}`}</h3>
          <button className="logOut" onClick={() => clearToken()}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="registerFunctions">
          <h3>Create account:</h3>
          <div>
            <SignUp
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
          <h3>Already have an account? Login:</h3>
          <div>
            <Login
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
