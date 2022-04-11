// You can choose to import all your functions, and re-export them here
const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

const postRegisterUser = async (username, password) => {
  const result = await fetch(`${BASEURL}/users/register`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await result.json();
  return data;
};

const postLoginUser = async () => {};

const getUserRoutines = async () => {};

const getUserProfile = async () => {};

const getAllActivities = async () => {
  const result = await fetch(`${BASEURL}/activities`);

  const data = await result.json();
  console.log(result);
  return data;
};

const postActivities = async () => {};

const patchActivities = async () => {};

const getActivitiesByRoutines = async () => {};

const getRoutines = async () => {};

const postRoutines = async () => {};

const patchRoutines = async () => {};

const deleteRoutines = async () => {};

const postAttachActivitytoRoutine = async () => {};

const patchRoutineActivity = async () => {};

const deleteRoutineActivity = async () => {};

export {
  getAllActivities,
  postActivities,
  patchActivities,
  getActivitiesByRoutines,
  postRegisterUser,
};
