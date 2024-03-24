console.log("Task Manager App");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const tasksRouter = require("./routes/tasks.router");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/hello", (req, res) => {
  res.status(200).json("Hello from task manager");
});

app.use("/api/v1/tasks", tasksRouter);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});
async function startServer() {
  await mongoose.connect(process.env.MONGO_URI, {});

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer()
