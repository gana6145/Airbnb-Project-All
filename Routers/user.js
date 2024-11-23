const express = require("express");
const { homes } =require('../models/home');

const { gethome } = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get("/",gethome);

exports.userRouter = userRouter;
