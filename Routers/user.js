const express = require("express");
const { homes } =require('../controllers/hostcontroller');

const { gethome } = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get("/",gethome);

exports.userRouter = userRouter;
