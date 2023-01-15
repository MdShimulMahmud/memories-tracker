import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
  )
  .catch((err) => console.log(err));
