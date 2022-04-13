import React from "react";

const SingleRoutine = ({ routine, singleRoutineView, setSingleRoutineView, i }) => {
    return (
        <>
        {singleRoutineView ?
            routine[i]
            :
            <button
            className="routine-name"
            onClick={() => {
              setSingleRoutineView(true);
            }}
           >
            <h1> {routine.name} </h1>
          </button>
          }
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
        </>
        
    )
}

export default SingleRoutine