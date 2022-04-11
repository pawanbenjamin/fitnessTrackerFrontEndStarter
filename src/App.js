import React from 'react'
import { useState, useEffect } from 'react';
import {
  LoginSignUp,
} from "./components"

function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null;
    setToken(localStorage.getItem("token"));
  }, [token]);
  
  return (
    <>
      <LoginSignUp 
           isLoggedIn={isLoggedIn}
           setIsLoggedIn={setIsLoggedIn}
           token={token}
           setToken={setToken}/>
    </>
  )
}

export default App
