import React from "react";
import { registerUser } from "../api";
import { useState } from "react";

const SignUp = ({ setToken, isLoggedIn, setIsloggedIn }) => {
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

export const LoginSignUp = ({ isLoggedIn, setIsLoggedIn, setToken, token }) => {
  const clearToken = () => {
    //this will clear the token when you click the logout button -- see button below.
    setToken("");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const [username, setUsername] = useState("");

  useEffect(() => {
    //this one checks if you are a current user by retrieving the "token" from your local storage on your browser.
    const getUserName = async () => {
      const result = await userData(localStorage.getItem("token"));
      setUsername(result.data.username);
    };
    getUserName();
  }, [token]);

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
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
          <h3>Already have an account? Login:</h3>
          <div>
            <Login
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      )}
    </>
  );
};
