const express = require("express");
const mongoose =require("mongoose");
const app = express();






// create connection
mongoose.connect("mongodb://localhost:27017/userProfiledb", {useNewUrlparser:true,useUnifiedTopology:false}).then(()=>{
    console.log("connected  with mongodb");
}).catch((err)=>{
    console.log(err)
})


const userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      
    },
      email: {
  
              type: String,
              
            },
  
  
    lastname: {
      type: String,
     
    }
  
    
  });
  
        
    
    // create collection 
    
// const User = new mongoose.model("user", userSchema)

const User = new mongoose.model("user", userSchema)

//create Prduct API

app.post("/api/v1/user/new",async(req,res)=>{
    const user = await User.create(req.body);
    res.status(201).json({
        success:true,
        user
                 })
})  

 
// read product
app.get("/api/v1/users",async(req,res)=>{
    const users = await User.find(req.body);
    res.status(200).json({
        success:true,
        users
    })
})




//updtae product




app.listen(3000,()=>{
    console.log("server running on port 3000");

})
