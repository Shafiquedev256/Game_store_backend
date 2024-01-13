const express = require("express") 
const cors = require("cors") 
require("dotenv").config()
const mongoose = require ("mongoose")
const app = express() 
app.use(cors())
const router = require("./routes/routes") 


app.use(cors()) 
app.use(express.json());
mongoose.connect(process.env.DATA_BASE)
.then(()=>{
app.listen(3000,()=>{console.log("connected")}) 
})
app.use("/gamestore/api/",router)