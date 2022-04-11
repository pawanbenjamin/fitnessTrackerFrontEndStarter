import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Activities } from "./components";

function App() {
  const [activitiesList, setActivitiesList] = useState()
  return (
      <Routes>
        <Route path="/activities" element={<Activities activitiesList={activitiesList} setActivitiesList={setActivitiesList}/>} />
        <Route path="/routines" element={<Activities />} />
        <Route path="/My-Routines" element={<Activities />} />
        <Route path="/login" element={<Activities />} />
        <Route path="/register" element={<Activities />} />
        <Route path="/" element={<Activities />} />
      </Routes>
      
  );
}

export default App;
