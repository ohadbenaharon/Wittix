import { response, request } from "express";
import bcrypt from "bcrypt";
import db from "../modules/db";

export const signUpUser = async (req: request, res: response) => {
  const { id, name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(" in the singupuser with ", { id, name, email, password });
  try {
    const newUser = await db.user.create({
      data: {
        id,
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User created successfully", { newUser });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
