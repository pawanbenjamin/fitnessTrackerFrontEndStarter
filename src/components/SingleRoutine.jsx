import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleRoutine = ({
  allRoutines,
  routine,
  singleRoutineView,
  setSingleRoutineView,
}) => {
  const { singleRoutineId } = useParams();
  //   console.log(typeof singleRoutineId, "asdfas");

  let routineToRender = null;

  if (singleRoutineId) {
    const singleRoutine = allRoutines.find(
      (element) => singleRoutineId == element.id
    );
    routineToRender = singleRoutine;
  } else {
    routineToRender = routine;
  }
  console.log(routineToRender);
  return (
    <>
      {routineToRender && routineToRender.id ? (
        <>
          <Link to={`/routines/${routineToRender.id}`}>
            <h1> {routineToRender.name} </h1>
          </Link>

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
        </>
      ) : null}
    </>
  );
};

export default SingleRoutine;
