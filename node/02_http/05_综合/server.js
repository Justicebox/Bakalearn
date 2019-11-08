const http = require("http");
const fs = require("fs"); //文件系统
const urlLib = require("url"); //get请求需要
const querystring = require("querystring"); //post请求

var server = http.createServer((req, res) => {
    // get
    var obj = urlLib.parse(req.url, true); //我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。
    var url = obj.pathname;
    console.log(url)
    var get = obj.query;


    // post
    var str = "";
    req.on("data", (data) => {
        str += data
    })
    req.on("end", () => {
        const post = querystring.parse(str)
            // 文件系统
        var fil_name = "./www" + url;
        fs.readFile(fil_name, (err, data) => {
            if (err) {
                res.write("404")
            } else {
                res.write(data)
            }
            res.end()
        })
    })
})

server.listen(8080)