import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, LoginSignUp, Routines, Activities } from "./components";

function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <>
      <h1>Fitness Tracker</h1>
      <div className="navbar">
        <Link to="*">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
      </div>
      <Routes>
        <Route
          exact path="*"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
            />}>
        </Route>
        <Route
          path="/account"
          element={
            <LoginSignUp
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
            />}>
        </Route>
        <Route path="/routines" element={<Routines />}>
        </Route>
        <Route path="/activities" element={<Activities />}>
        </Route>
      </Routes>

    </>
  );
}

export default App;
