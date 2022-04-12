import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";

const Routines = () => {
  const [allRoutines, setAllRoutines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRoutines();

        setAllRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {allRoutines && allRoutines.length
        ? allRoutines.map((routine, i) => {
            //gotta map over the posts and return result to get all posts.
            return (
              <div key={`routine${i}`} className="routine">
                <h1> {routine.name} </h1>
                <h2> {routine.goal} </h2>
                <p> by {routine.creatorName} </p>
                <ol>
                  {routine.activities && routine.activities.length
                    ? routine.activities.map((activity, j) => {
                        return <li key={`activities${j}`}>{activity.name}</li>;
                      })
                    : null}
                </ol>
                <hr></hr>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
