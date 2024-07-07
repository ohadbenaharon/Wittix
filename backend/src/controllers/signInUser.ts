import { response, request } from "express";
import bcrypt from "bcrypt";
import db from "../modules/db";
import jwt from "jsonwebtoken";

export const signInUser = async (req: request, res: response) => {
  const id = req?.body?.id;
  const pass = req?.body?.password;

  console.log("id ", id, "password ", pass);

  if (!id || !pass) {
    return res.status(400).json({ error: "Id and password are required." });
  }
  const user = await db.user.findFirst({
    where: { id: id },
  });

  console.log("got user ", { user });

  if (!user) {
    return res.status(404).json({ error: "User not found." });
  } else {
    const hashedPassword = await bcrypt.hash(pass, 10);

    console.log("got into the hashed passwprd ", { hashedPassword });
    if (user.password !== hashedPassword)
      return res.status(401).json({ error: "Invalid password." });
  }
  const token = jwt.sign({ id }, "secret");
  return res.status(200).json({ message: "User signed in.", token: token });
};
