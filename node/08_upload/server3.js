const express = require("express");
const fs = require("fs");
const path = require("path"); //系统自带用来解析地址
var server = express();

// 导入处理用户上传文件的中间件
const multer = require("multer");
// 设置上传路径
var multerObj = multer({
        dest: "./www/upload"
    })
    // 接收用户所有上传的文件 any()
server.use(multerObj.any())
server.post("/upload", (req, res) => {
    console.log(req.files)
        // 上传成功之后 修改文件名+后缀名
    var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
    console.log(newName)
    fs.rename(req.files[0].path, newName, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("修改成功")
        }
    })
    res.send("ok")
})
server.use(express.static("www"))
server.listen(8080)