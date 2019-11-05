const http = require("http");
const url = require("url");

var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    // 指定访问来源 所有  允许所有访问来源
    res.setHeader("Access-Control-Allow-Origin", "*");

    var str = ""; //接收数据
    var i = 0; //判断多少次
    // data 有一段数据到达 （很多次）
    req.on("data", function(data) { //post请求用方法on监听
            console.log(`第${i++}次收到数据`)
            str += data
        })
        // end 数据全部到达（一次）
    req.on("end", function() {
        console.log(str)
    })

    res.end()
}).listen(8080)