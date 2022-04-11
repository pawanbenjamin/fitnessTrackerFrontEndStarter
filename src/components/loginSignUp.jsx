import React from "react";
import SignUp from "./signUp";
import Login from "./login";



const LoginSignUp = ({ isLoggedIn, setIsLoggedIn, setToken, token }) => {
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

export default LoginSignUp