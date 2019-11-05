const http = require("http");

var userList = {
    admin: 123,
    user: 456,
    york: 789
}

var server = http.createServer((req, res) => {
    console.log(req.url)
        // /login?user=admin&pass=123
    var arr = req.url.split("?")[1].split("&");
    console.log(arr)
        // {
        //     user:admin,
        //     pass:123
        // }
    var get = {};
    arr.forEach((value, index) => {
        var key = value.split("=")[0]; //key和value都是 arr(req)
        var val = value.split("=")[1];
        get[key] = val;
    })
    console.log(get)
}).listen(8080)