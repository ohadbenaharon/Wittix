import React from "react";
import { UserType } from "../types/userType";
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";

const UserCard = ({
  user,
  onClick,
}: {
  user: UserType;
  onClick: () => void;
}) => {
  return (
    <Card onClick={onClick} flex={3} minW={300}>
      <CardBody>
        <CardHeader> {user.username}</CardHeader>
        <Text>{user.email}</Text>
        <Text>started at : {user.created_at}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
