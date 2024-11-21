const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir=require('./util/util');
const { userRouter } = require("./Routers/user");
const { hostRouter } = require("./Routers/host");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
app.use(hostRouter);

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
