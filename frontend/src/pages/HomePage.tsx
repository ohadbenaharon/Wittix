import React from "react";
import useGetApi from "../api/getApi";
import { UserType } from "../types/userType";
import UserCard from "../components/UserCard";
import CardUserModel from "../components/CardUserModel";
import { useUserContext } from "../providers/UserProvider";
import ListOfCustomers from "../components/ListOfCustomers";

const HomePage = () => {
  const { user } = useUserContext();
  const { data, isError, isLoading } = useGetApi(user?.id);

  console.log("data", data);
  console.log("data", isError);
  console.log("data", isLoading);

  return (
    <div style={{ flexWrap: "wrap", display: "flex", gap: 8 }}>
      <ListOfCustomers customers={[]} />
    </div>
  );
};

export default HomePage;
