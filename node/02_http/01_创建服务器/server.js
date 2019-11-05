// 1.把需要的模块引入进来 通过require
var http = require("http");

// 2.开始搭建服务器
// http这个模块是系统工具库提供的
// 只需要安装node环境 工具库就在环境里面
var server = http.createServer(function(request, response) {
    console.log("有人访问了")
})

// 3.监听--等着访问
// 端口--数字

server.listen(8080)

// localhost  代表本机

// request 请求--输入的请求的信息
// response 响应--输出的请求的东西