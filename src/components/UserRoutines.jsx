import React, { useState, useEffect } from "react";
import { getUserRoutines, updateRoutine } from "../api";
import RoutineForm from "./RoutineForm";

const UserRoutines = ({ token, username, allRoutines, setAllRoutines }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  const [formState, setFormState] = useState(false);
  const [changedRoutine, setChangedRoutine] = useState(false);

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
          Create Routine
        </button>
      )}

      {userRoutines && userRoutines.length ? (
        userRoutines.map((routine, i) => {
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
              <form
                className="updateRoutine"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const updatedRoutine = await updateRoutine(
                    formState.name,
                    formState.goal,
                    formState.isPublic,
                    token
                  );
                  setAllRoutines([...allRoutines, updatedRoutine]);
                  setChangedRoutine(false);
                }}
              >
                <div className="createName">Update your routines!</div>
                <input
                  className="name"
                  type="text"
                  value={formState.name}
                  placeholder="name"
                  required
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                  }}
                />
                <input
                  className="goal"
                  type="text"
                  value={formState.goal}
                  placeholder="goal"
                  required
                  onChange={(e) => {
                    setFormState({ ...formState, goal: e.target.value });
                  }}
                />
                <input
                  className="isPublic"
                  type="checkbox"
                  value={formState.isPublic}
                  placeholder="isPublic"
                  onChange={() => {
                    setFormState({
                      ...formState,
                      isPublic: !formState.isPublic,
                    });
                  }}
                />

                <button className="updateButton" type="submit">
                  Update Routine
                </button>
              </form>
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

/* 
{msgBox.yes ? (
              msgBox.idx == i ? (
                <Message post={post} setMsgBox={setMsgBox} />
              ) : (
                <button
                  className="msgButton1"
                  onClick={() => {
                    setMsgBox({ ...msgBox, idx: i });
                  }}
                >
                  Send Message
                </button>
              )
            ) : (
              <button
                className="msgButton2"
                onClick={() => {
                  setMsgBox({ ...msgBox, idx: i });
                }}
              >
                Create Message
              </button>
            )}
*/
