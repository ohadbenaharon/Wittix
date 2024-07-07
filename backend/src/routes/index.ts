import express from "express";

import { getAllCustomers, addNewCustomer } from "../controllers";
import { tokenCheckMid } from "../middlewares/authMiddleware";
import { signUpUser } from "../controllers/signUpUser";
import { signInUser } from "../controllers/signInUser";

export const initRoutes = (app: express) => {
  app.get("/", tokenCheckMid, getAllCustomers);
  app.post("/:id", tokenCheckMid, addNewCustomer);
  app.post("/signIn", signInUser);
  app.post("/signup", signUpUser);
};
