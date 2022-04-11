import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken, setIsloggedIn }) => {
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
          if ((formState.password = formState.confirmPassword)) {
            const result = await registerUser(
              formState.username,
              formState.password
            );
            setToken(result.token);
            localStorage.setItem("token", result.token);
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
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
};

export default SignUp