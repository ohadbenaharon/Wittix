import axios from "axios";

async function updateApi(
  id: string,
  name: string,
  phone: string,
  email: string,
  birthday: Date
) {
  return axios
    .post(`http://localhost:8080/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },

      params: {
        name,
        email,
        phone,
        birthday,
      },
    })
    .then((res) => res?.data);
}

export default updateApi;
