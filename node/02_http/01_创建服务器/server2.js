const http = require("http");

var server = http.createServer(function(req, res) {
    res.write("<h2>hello node</h2>")

    // 响应结束将之前的内容抛出
    res.end();
})

//  listen EADDRINUSE :::8080
server.listen(8080)