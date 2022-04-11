import { postRegisterUser } from "../api";
import React, { useState } from "react";

const Register = ({ username, setUsername, password, setPassword }) => {
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await postRegisterUser(username, password);
    console.log(user);
    const token = await user.token;
    localStorage.setItem("token", token);
  };

  return (
    <div className='register'>
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
