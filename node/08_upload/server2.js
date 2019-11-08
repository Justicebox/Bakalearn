const express = require("express");
// 导热油处理用户上传文件的中间件
const multer = require("multer");
var server = express();
// 设置上传的路径
var multerObj = multer();
// 接收用户上传的文件 any()
server.use(multerObj.any())
server.post("/", (req, res) => {

    console.log(req.files)
})
server.listen(8080)