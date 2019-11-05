// 读取cookie 需要中间件 cookie-parser
const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();
server.use(cookieParser());
server.use("/aaa/index.html", (req, res) => {
    console.log(req.cookies);
    res.send("ok")
})
server.listen(8080)