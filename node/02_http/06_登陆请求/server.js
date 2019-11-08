const http = require("http");
const fs = require("fs");
const urlLib = require("url");
const querystring = require("querystring");
var userList = {
    admin: {
        pass: 123,
        data: [123, 456]
    }
}
var server = http.createServer((req, res) => {
    // 设置相应头 编码格式
    // <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    // 指定访问来源 所有  允许所有访问来源
    res.setHeader("Access-Control-Allow-Origin", "*");

    // localhost/login
    // localhosr/register
    var u = urlLib.parse(req.url);
    console.log(u.path)
    var str = "";
    req.on("data", (data) => {
        str += data
    })
    req.on("end", () => {
        var users = querystring.parse(str);
        console.log(users)
            // 用户如果登陆
        if (u.path == "/login") {
            // 判断传进来的用户是否再用户列表中
            if (Object.keys(userList).indexOf(users.user) != -1) {
                // 判断用户传进来的密码是否正确
                if (users.pass == userList[users.user].pass) {
                    res.write(`${users.user}登陆成功`)

                    res.write(`<ul>`)
                    userList[users.user].data.forEach((element, index) => {
                        res.write(`<li>${index}...${element}</li>`)
                    })

                    res.write(`</ul>`)
                } else {
                    res.write("密码错误")
                }
            } else {
                res.write("用户不存在")
            }
        } else if (u.path == "/register") {
            if (Object.keys(userList).indexOf(users.user) != -1) {
                res.write("用户已存在")
            } else {
                var newUser = {
                    pass: users.pass,
                    data: []
                }
                userList[users.user] = newUser;
                res.write('{"reason":"200","result":"注册成功}')
            }
        } else if (u.path == "/add") {
            // 判断传进来的用户是否再用户列表中
            if (Object.keys(userList).indexOf(users.user) != -1) {
                // 判断用户传进来的密码是否正确
                if (users.pass == userList[users.user].pass) {
                    userList[users.user].data.push(users.data)
                    res.write(`${users.user}添加成功`)

                    res.write(`<ul>`)
                    userList[users.user].data.forEach((element, index) => {
                        res.write(`<li>${index}...${element}</li>`)
                    })

                    res.write(`</ul>`)
                } else {
                    res.write("密码错误")
                }
            } else {
                res.write("用户不存在")
            }
        }

        res.end()
    })
})

server.listen(8080)