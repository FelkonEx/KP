import express from "express";
import cors from "cors"; // Import the cors package
import { routes } from "./routes";

const app = express();
const PORT = 3001;

app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
