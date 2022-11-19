const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

require("dotenv").config();
require("./configs/dbConfig")();

const memoRouter = require("./routes/memoRouter");
const loginRouter = require("./routes/loginRouter");
const authenticate = require("./middlewares/authenticate");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(authenticate);
app.use("/login", loginRouter);
app.use("/memos", memoRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
