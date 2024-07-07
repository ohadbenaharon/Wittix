import express from "express";
import { initRoutes } from "./routes";

const cors = require("cors");
const app = express();

app.use(cors());
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

initRoutes(app);

// start the Express server
app.listen(port, "0.0.0.0", () => {
  console.log(`server started at http://localhost:${port}`);
});
