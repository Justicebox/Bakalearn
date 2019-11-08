const http = require("http");
const url = require("url");
var userList = {
    admin: 123,
    user: 456,
    york: 789
}

var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    // 指定访问来源 所有  允许所有访问来源
    res.setHeader("Access-Control-Allow-Origin", "*"); //解决跨域问题

    var urlObj = url.parse(req.url, true); //我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。
    var get = urlObj.query;

    // login
    if (urlObj.pathname == "/login") {
        if (Object.keys(userList).indexOf(get.user) !== -1) { //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。返回对应索引    
            if (userList[get.user] = get.pass) {
                res.write("登陆成功")
            } else {
                res.write("密码错误")
            }
        } else {
            res.write("用户名不存在")
        }
    }
    // register
    res.end()
}).listen(8080)