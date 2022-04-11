import React from "react";
import { registerUser } from "../api";
import { useState } from "react";

export const SignUp = ({ setToken, isLoggedIn, setIsloggedIn }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="register">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if ((formState.password = formstate.confirmPassword)) {
            const result = await registerUser(
              formState.username,
              formState.password
            );
            setToken(result.data.token);
            localStorage.setItem("token", result.data.token);
            setIsloggedIn(true);
          }
        }}
      >
        <input
          value={formState.username}
          type="text"
          placeholder="username"
          required
          onChange={(e) => {
            setFormState({ ...formState, username: e.target.value });
          }}
        />
        <input
          value={formState.password}
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setFormState({ ...formState, password: e.target.value });
          }}
        />
        <input
          value={formState.confirmPassword}
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setFormState({ ...formState, confirmPassword: e.target.value });
          }}
        />
        <button type="submit">SIGN UP!</button>
      </form>
    </div>
  );
};

export const Login = ({ setToken, setIsloggedIn }) => {
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
