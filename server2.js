const express=require('express')
const app=express()
app.get('/login',function(req,res){
    res.send("login product data")
})
app.get('/register',function(req,res){
    res.send("register product data")
})
app.listen(8089)
