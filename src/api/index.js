// You can choose to import all your functions, and re-export them here
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export const registerUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TOKEN_STRING_HERE",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data;
};
