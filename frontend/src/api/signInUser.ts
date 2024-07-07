import axios from "axios";

const endpoint = "http://localhost:8080/";

export async function signInUser(id: string, password: string) {
  console.log("id ", id, "password ", password);
  const basicAuthHeader = `Basic ${btoa(`${id}:${password}`)}`;

  const init = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: basicAuthHeader,
    }),
    body: JSON.stringify({ id, password }),
  };

  return axios.post(endpoint + "signIn", init.body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: basicAuthHeader,
    },
  });
}
