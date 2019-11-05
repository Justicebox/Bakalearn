// 发送cookie 无需中间件
const express = require("express");
var server = express();
server.use("/", (req, res) => {
    res.cookie("user", "york", { path: '/aaa', maxAge: 30 * 24 * 3600 * 1000 })
    res.send("ok")
})
server.listen(8080)