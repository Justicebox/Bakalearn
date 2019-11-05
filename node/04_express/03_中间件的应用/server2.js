const express = require("express")
const bodyParser = require("body-parser")
var server = express();
server.listen(8080)
    // post通过body-parser中间件解析参数
    // 多个use 链式操作
server.use(bodyParser.urlencoded({
    extended: false, //拓展模式
    limit: 2 * 1024 * 1024 //限制 默认是 100K
}))
server.use("/", (req, res) => {
    // post  
    console.log(req.body)
})