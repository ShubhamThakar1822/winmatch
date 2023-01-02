var express=require("express");
var app=express();
app.get("/",function(req,resp){
    resp.send("ok guys please feel the feedbak");
})
app.listen(3000);
console.log("srever is onn");