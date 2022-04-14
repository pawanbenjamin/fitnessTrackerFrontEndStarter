import React, { useEffect } from "react";
import { getRoutines } from "../api";
import SingleRoutine from "./SingleRoutine";

const Routines = ({
  allRoutines,
  setAllRoutines,
  singleRoutineView,
  setSingleRoutineView,
}) => {
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
  }, [setAllRoutines]);
  return (
    <div>
      {allRoutines && allRoutines.length
        ? allRoutines.map((routine, i) => {
            //gotta map over the Routines and return result to get all Routines.
            return (
              <div key={`routine${i}`} className="routine">
                <SingleRoutine
                  allRoutines={allRoutines}
                  routine={routine}
                  singleRoutineView={singleRoutineView}
                  setSingleRoutineView={setSingleRoutineView}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
