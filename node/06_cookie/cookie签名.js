// 读取cookie 需要中间件 cookie-parser
const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();
// 读取cookie是 秘钥相同
server.use(cookieParser("jasdfbhasjk"));
server.use("/aaa/index.html", (req, res) => {
    // 设置秘钥
    req.secret = "jasdfbhasjk";
    res.cookie("user", "york", { path: "/aaa", signed: true })

    console.log("签过名的cookie", req.signedCookies);
    console.log("未签名的cookie", req.cookies);
    res.send("ok")
})
server.listen(8080)