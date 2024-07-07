import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getApi(id: string | undefined) {
  return axios
    .get("http://localhost:8080/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res?.data);
}

export default function useGetApi(id: string | undefined) {
  return useQuery({
    queryKey: [`getCustomers`],
    queryFn: async () => await getApi(id).then((res) => res),
    staleTime: 1000 * 60 * 10,
  });
}
