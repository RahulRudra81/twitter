import express from "express";
import dbStart from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.URL;

const app = express();

app.use(cors());

app.use("/auth", require("./routes/authRoutes.js"));

app.use(express.json());
dbStart(url);

app.listen(port, () => {
  console.log("Server started ...");
});
