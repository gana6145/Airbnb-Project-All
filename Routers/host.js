const express = require("express");
const { addedhome } = require("../controllers/hostcontroller");
const { addhome } = require("../controllers/hostcontroller");
const hostRouter = express.Router();
hostRouter.get("/add-home", addhome);
hostRouter.post("/add-home", addedhome);
exports.hostRouter = hostRouter;

