import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Activities, Register, Login } from "./components";

function App() {
  const [activitiesList, setActivitiesList] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <Routes>
      <Route
        path='/activities'
        element={
          <Activities
            activitiesList={activitiesList}
            setActivitiesList={setActivitiesList}
          />
        }
      />
      <Route path='/routines' element={<Activities />} />
      <Route path='/My-Routines' element={<Activities />} />
      <Route
        path='/login'
        element={
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        }
      />
      <Route
        path='/register'
        element={
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        }
      />
      <Route path='/' element={<Activities />} />
    </Routes>
  );
}

export default App;
