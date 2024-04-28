import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log("listining on port ", port));
