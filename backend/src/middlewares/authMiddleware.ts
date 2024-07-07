import jwt from "jsonwebtoken";

export const tokenCheckMid = (req: any, res: any, next: any) => {
  const token = req.headers.authorization;
  try {
    const data = jwt.verify(token, "secret");
    req.user = data.email;
    req.action = data.action;
    req.cityToView = data.cityToView;

    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
};
