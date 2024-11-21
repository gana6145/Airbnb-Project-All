const express=require('express');
const { homes } = require('./host');
const userRouter=express.Router();


userRouter.get('/',(req,res,next)=>{
  res.render('welcome',{homes:homes});
})

exports.userRouter=userRouter;