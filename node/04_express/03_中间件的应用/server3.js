const express = require("express")
const bodyParser = require("body-parser")
var server = express();
server.listen(8080)

// 多个use 链式操作
server.use("/", (req, res, next) => {
    console.log("监听地址执行逻辑")
    next()
})
server.use("/", (req, res) => {
    console.log("监听同一个地址执行其他逻辑")
})