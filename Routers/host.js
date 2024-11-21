const express=require('express');
const hostRouter=express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
  res.render('add-home');
})
const homes=[];
hostRouter.post('/add-home',(req,res,next)=>{
  
  homes.push(req.body);
  console.log(homes);
  res.render('home');
})

exports.hostRouter=hostRouter;
exports.homes=homes;