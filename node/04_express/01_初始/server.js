const express = require("express");

// 创建服务器
var server = express();
// 靠use处理用户的请求
server.use("/a.html", (req, res) => {
    // 原生：
    // res.write("abc")
    // res.write({ a: 5, b: 12 })

    // express
    res.send({ a: 5, b: 12 })

    res.end()
})
server.use("/b.html", (req, res) => {
    res.send("123")
    res.end();
})

server.listen(8080)