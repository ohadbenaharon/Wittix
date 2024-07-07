import axios from "axios";

const endpoint = "http://localhost:8080/";

export async function signUpUser(
  id: string,
  password: string,
  email: string,
  name: string
) {
  const init = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ id, name, email, password }),
  };

  return axios.post(endpoint + "signup", init.body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
