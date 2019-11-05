const http = require("http");

var server = http.createServer(function(req, res) {
    console.log(req.url)
    switch (req.url) {
        case "/1.html":
            res.write("1111111111")
            break
        case "/2.html":
            res.write("2222222")
            break
        default:
            res.write("404")
    }

    res.end();
})

//  listen EADDRINUSE :::8080
server.listen(8080)