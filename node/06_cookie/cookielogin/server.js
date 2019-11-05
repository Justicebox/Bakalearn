const express = require("express");
const cookieParser = require("cookie-parser");
var server = express();

var userList = {
    admin: {
        pass: 123,
        data: [123, 456]
    }
}

// 设置视图引擎
server.engine("art", require("express-art-template"));
// node express-art-template 需要生产环境
server.set("view options", {
    debug: process.env.NODE_ENV !== "production"
})

// 用中间件 解析cookie
server.use(cookieParser("dafdfsafasfa"))

// 拦截用户的所有请求 判断用户去哪里 有没有登陆
server.use((req, res, next) => {
    // 判断用户是否登陆
    if (req.signedCookies.user) {
        // 如果登陆了 该去哪里去哪里 (index.art)
        next()

    } else {
        // 如果没有登陆 就去登陆
        if (req.path == "/login") {
            next();
        } else {
            // 用户没有登陆 目标地址login
            res.redirect("/login")
        }
    }
})
server.get("/", (req, res) => {
    res.render("index.art", {
        user: {
            name: req.signedCookies.user
        }
    })
})
server.get("/login", (req, res) => {
    // 如果用户传进来user和pass
    // /login?user=admin&pass=123
    var user = req.query;
    if (req.query.user && req.query.pass) {
        // 判断用户传进来的用户名在不在用户列表
        if (Object.keys(userList).indexOf(user.user) != -1) {
            if (user.pass == userList[user.user].pass) {
                res.cookie("user", user.user, {
                    signed: true, //知否支持秘钥
                    httpOnly: true //只允许web server访问
                })
                req.secret = "dafdfsafasfa"; //设置秘钥
                res.redirect("/")
            } else {
                res.render("login.art", {
                    err: "密码错误"
                })
            }
        } else {
            res.render("login.art", {
                err: "用户不存在"
            })
        }
    } else {
        res.render("login.art")
    }
})
server.listen(8080)