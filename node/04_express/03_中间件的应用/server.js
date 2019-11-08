const express = require("express")
var server = express();
server.listen(8080)

server.use("/", (req, res) => {
    // get 通过req.query解析参数
    console.log(req.query)
})