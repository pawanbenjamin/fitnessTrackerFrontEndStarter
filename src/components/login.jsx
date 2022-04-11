import React from "react";
import { loginUser } from "../api";
import { useState } from "react";


const Login = ({ setToken, setIsloggedIn }) => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  return (
    <div className="userLogin">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(
            loginState.username,
            loginState.password
          );
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
          setIsLoggedIn(true);
        }}
      >
        <input
          value={loginState.username}
          type="text"
          placeholder="username"
          required
          onChange={(e) => {
            setLoginState({ ...loginState, username: e.target.value });
          }}
        />
        <input
          value={loginState.password}
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setLoginState({ ...loginState, password: e.target.value });
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
 
export default Login