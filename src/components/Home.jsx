import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";

const Home = ({ isLoggedIn, setIsLoggedIn, token, setToken }) => {
  return (
    <div>
      <h2>
        Fitness Tracker is a web application designed to let you share workout
        routines and become your best self!
      </h2>
      <h2>
        <Link to="/account">Get started</Link>
      </h2>
      <Routes>
        <Route
          path="/account"
          element={
            <LoginSignUp
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Home;
