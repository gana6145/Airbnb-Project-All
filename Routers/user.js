const express = require("express");


const { gethome,gethomes,gethomedetail,addfavourite } = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get("/",gethome);
userRouter.get("/homes",gethomes);
userRouter.get("/homes/:homeid",gethomedetail);
userRouter.get("/favourite",addfavourite)

exports.userRouter = userRouter;


