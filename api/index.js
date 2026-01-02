const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todos", require("./routes/todo"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Todo API Running");
});

module.exports = app;
