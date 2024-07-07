import React, { Context, useContext } from "react";
import { UserType } from "../types/userType";

export interface UserContextValue {
  user?: UserType;
  isLogin: boolean;
}

export const useUserContext = () => useContext(UserContext);

export const UserContext: Context<UserContextValue> =
  React.createContext<UserContextValue>({
    user: undefined,
    isLogin: false,
  });

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserType>();
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user,
        isLogin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
