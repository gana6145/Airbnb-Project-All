const express = require("express");


const { gethome,gethomes,gethomedetail } = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get("/",gethome);
userRouter.get("/homes",gethomes);
userRouter.get("/homes/:homeid",gethomedetail);

exports.userRouter = userRouter;
