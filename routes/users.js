const express = require("express");
//const { MongoClient } = require("../index.js");
const mongo = require("../mongodb")
const users = express.Router();


users.post("/signup", async(req, res) => {
  let mongoClient=await mongo.dbconnect()
  console.log(req.body)
  let{name,email,password} = req.body

  mongoClient.collection("users").insertOne({"name":name,"email":email,"password":password})
   

      res.send("success");
    });

    users.post("/signin", async(req, res) => {
      let mongoClient=await mongo.dbconnect()

      let{emailId,password} = req.body
      console.log(req.body)
    
      let data= await mongoClient.collection("users").findOne({email:emailId})
      if(data.password==password){
        console.log("login")
        
      }
      else{
        console.log("not login")
      }
      
      res.send("login");
      
    
          
        });
    
    module.exports = users;





module.exports = users;
