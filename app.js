const express = require("express");
const app = express();
const port = 8080;

const postRouter = require("./routes/postRouter");

require("dotenv").config();
require("./configs/dbConfig")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
