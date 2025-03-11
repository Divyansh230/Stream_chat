import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./route/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(express.json())
app.use(cors())
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});