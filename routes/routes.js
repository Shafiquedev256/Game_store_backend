const express = require("express")
const router = express.Router() 
const Games = require("../models/gamesModel")

router.get("/",async(req,res)=>{
  const games = await Games.find({})
res.json(games)
}) 

router.get("/:id",async(req,res)=>{
  const id = req.params.id 
  try{
    const games = await Games.findById(id) 
    res.json(games)
  }catch(err){console.log(err.message)}
})

router.post("/",async (req,res)=>{
  const {title,description,img,trailer,cost,category,platform,release,publisher} = req.body 
  try{
   const games = new Games({title,description,img,trailer,cost,category,platform,release,publisher}) 
   const saveDGames = await games.save()
   res.json(savedGames)
  }catch(err){console.log(err.message)}
}) 


router.patch("/update/:id",async(req,res)=>{
  const id  = req.params.id;
  const update = req.body; 
  try{
  const results = await Games.findByIdAndUpdate(id,update) 
  res.json(results)
  }catch(err){console.log(err.message)}
})
module.exports = router