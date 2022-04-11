import { postLoginUser } from "../api";
import React, { useState } from "react";
import { handleUsername, handlePassword } from "./Register";

const Login = ({ username, setUsername, password, setPassword }) => {
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await postLoginUser(username, password);
    console.log(user);
    const token = await user.token;
    localStorage.setItem("token", token);
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type='text'
          placeholder='username'
          onChange={handleUsername}
        />
        <input
          value={password}
          type='password'
          placeholder='password'
          onChange={handlePassword}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
