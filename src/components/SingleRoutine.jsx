import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditRoutineForm from "./EditRoutineForm";

const SingleRoutine = ({
  allRoutines,
  routine,
  username,
  token,
  setAllRoutines,
  setUserRoutines,
  userRoutines,
}) => {
  const { singleRoutineId } = useParams();
  const [editRoutineWanted, setEditRoutineWanted] = useState(false);
  let routineToRender = null;

  if (singleRoutineId) {
    const singleRoutine = allRoutines.find(
      (element) => +singleRoutineId === +element.id
    );
    routineToRender = singleRoutine;
  } else {
    routineToRender = routine;
  }
  console.log(routineToRender, "ROUTINE TO RENDER");
  console.log(routineToRender.id, "ROUTINE TO RENDER ID");
  return (
    <>
      {routineToRender && routineToRender.id ? (
        <>
          {routineToRender.isPublic ? (
            <Link to={`/routines/${routineToRender.id}`}>
              <h1> {routineToRender.name} </h1>
            </Link>
          ) : (
            <h1>{routineToRender.name}</h1>
          )}

          <h2> {routineToRender.goal} </h2>
          <p> by {routineToRender.creatorName} </p>
          <ol>
            {routineToRender.activities && routineToRender.activities.length
              ? routineToRender.activities.map((activity, j) => {
                  return <li key={`activities${j}`}>{activity.name}</li>;
                })
              : null}
          </ol>
          <hr></hr>
          {routineToRender.creatorName === username ? (
            <div className="editRoutine">
              {editRoutineWanted ? (
                <EditRoutineForm
                  setEditRoutineWanted={setEditRoutineWanted}
                  token={token}
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines}
                  routineToRender={routineToRender}
                  setUserRoutines={setUserRoutines}
                  userRoutines={userRoutines}
                />
              ) : (
                <button
                  className="updateRoutineButton"
                  onClick={() => {
                    setEditRoutineWanted(true);
                  }}
                >
                  Edit
                </button>
              )}

              <hr></hr>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default SingleRoutine;
