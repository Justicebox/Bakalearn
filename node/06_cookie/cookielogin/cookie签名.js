//读取cookie 需要中间件 cookie-parser
const express = require("express")
const cookieParser = require("cookie-parser")

var server = express();
//读取cookie时密钥相同
server.use(cookieParser("dfgjdfoifdhjo"));
server.use("/aaa/index.html",(req,res) =>{
    //设置密钥
    req.secret = "dfgjdfoifdhjo";
    res.cookie("user","york",{signed:true})
    console.log("未签名的cookie",req.cookies);
    console.log("已签名的cookie",req.signedCookies);
    res.send("ok")
})
server.listen(8080);