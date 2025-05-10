
const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    return res.send("hello")
})

app.get("/numbers/:numberid",(req,res)=>{
    console.log();
    return res.json("")
})

app.listen(3000,()=>{
    console.log("listeing tothe port 3000");
    
})