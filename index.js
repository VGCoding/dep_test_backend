const express = require("express")
const geoip=require('geoip-lite')
var app = express()
app.get('/',(req,res)=>{
    res.send("hii")
})
app.get("/home",function(request,response){
const ip=request.socket.remoteAddress;
var geo = geoip.lookup(ip);
response.send({"ip":ip,"geo-loc":geo,"mssg":"hi there"})
})
app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});