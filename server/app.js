import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

// App Configs
const app = express();
const PORT = 8080;
await connectDB();

app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
  console.log("Server is running on port:", PORT);
});

app.get("/", (req, res) => {
  res.send("Working");
});
