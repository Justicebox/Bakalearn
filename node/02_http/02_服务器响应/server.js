const http = require("http");
const fs = require("fs");
var server = http.createServer(function(req, res) {
    fs.readFile("./www/index.html", (err, data) => {
        if (err) {
            res.write("404")
        } else {
            res.write(data)
        }
        // 响应结束将之前的内容抛出
        res.end();
    })


})

//  listen EADDRINUSE :::8080
server.listen(8080)