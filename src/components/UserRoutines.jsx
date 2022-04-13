import React, { useState, useEffect } from "react";
import { getUserRoutines } from "../api";
import RoutineForm from "./RoutineForm";

const UserRoutines = ({ token, username, allRoutines, setAllRoutines }) => {
  const [userRoutines, setUserRoutines] = useState([]);

  const [newRoutineWanted, setNewRoutineWanted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserRoutines(token, username);
        setUserRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token, username]);

  return (
    <div>
      {newRoutineWanted ? (
        <RoutineForm
          setNewRoutineWanted={setNewRoutineWanted}
          token={token}
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
        />
      ) : (
        <button
          className="newPostButton"
          onClick={() => {
            setNewRoutineWanted(true);
          }}
        >
          Create Post
        </button>
      )}

      {userRoutines && userRoutines.length ? (
        userRoutines.map((routine, i) => {
          //gotta map over the posts and return result to get all posts.
          return (
            <div key={`userRoutine${i}`} className="userRoutines">
              <h1> {routine.name} </h1>
              <h2> {routine.goal}</h2>
              <p> by {routine.creatorName} </p>
              <ol>
                {routine.activities && routine.activities.length
                  ? routine.activities.map((activity, j) => {
                      return (
                        <li key={`UserActivities${j}`}>{activity.name}</li>
                      );
                    })
                  : null}
              </ol>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <div>Looks like you haven't made any routines...</div>
      )}
    </div>
  );
};

export default UserRoutines;
