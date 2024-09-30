const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/todo-app")
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("error cured", err);
  });

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.end("i am tester");
});

app.use(router);
app.use((req, res, next) => {
  res.json({
    message: "router not found",
  });
});
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(5000, () => {
  console.log("server is running port 5000....");
});
