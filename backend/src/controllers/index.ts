import { response, request } from "express";

import db from "../modules/db";

export const getAllCustomers = async (req: request, res: response) => {
  console.log("got the data ", { db });
  const customers = await db.customer.findMany({
    where: {
      UserId: req.params.id,
    },
  });

  return res.status(200).json(customers);
};

export const addNewCustomer = async (req: request, res: response) => {
  const userId = req.params.id;
  const { name, email, phone, birthday } = req.body;
  const newCustomer = await db.customer.create({
    data: {
      UserId: userId,
      name,
      email,
      phone,
      birthday,
    },
  });
  return res.status(200).json(newCustomer);
};
