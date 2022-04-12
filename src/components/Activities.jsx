import React, { useState, useEffect } from "react";
import { getActivities } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getActivities();

        setAllActivities(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {allActivities && allActivities.length
        ? allActivities.map((activity, i) => {
            //gotta map over the posts and return result to get all posts.
            return (
              <div key={`activity ${i}`} className="activity">
                <h1> {activity.name} </h1>
                <h2> {activity.description} </h2>
                <hr></hr>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;
