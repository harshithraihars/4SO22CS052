const {router}=require("./route")
const express=require("express")

const app=express()
app.use("/",router)

app.listen(3000,()=>{
    
    console.log("listeing tothe port 3000");
    
})