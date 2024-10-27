const express= require('express');

const server= express();

server.get('/',(req,res)=>{
    res.send("Welcome to My Application")
})

server.get('/users',(req,res)=>{
    res.send([{id:1,name:"Sonam"},{id:2,name:"Sonam"},{id:3,name:"Sonam"}])
})

server.listen(5000,()=>console.log("Server Started"))