const express = require("express")
const router = express.Router() 
const Games = require("../models/gamesModel")

router.get("/",async(req,res)=>{
  const games = await Games.find({})
res.json(games)
}) 

router.post("/",(req,res)=>{
  const {name,email} = req.body
  res.json({name,email})
})
module.exports = router