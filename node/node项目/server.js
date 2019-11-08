const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const common = require("./libs/common")
var app = express()
app.use(bodyParser.urlencoded({
        extended: false, //拓展模式
        limit: 2 * 1024 * 1024 //限制 默认是 100K
    }))
    // 设置视图引擎
app.engine("art", require("express-art-template"));
// node express-art-template 需要生产环境
app.set("view options", {
        debug: process.env.NODE_ENV !== "production"
    })
    // 1.链接
    // 连接池 creatPool
var db = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database: '20191101' });
// console.log(db)
// 监听默认地址"/" 打开默认模板(login)
app.get("/", (req, res) => {
        res.render('login.art')
    })
    // 监听用户想要去某一个地址（路由） 渲染响应模板
app.get("/login", (req, res, next) => {
    res.render("login.art")
    next()
})
app.post("/login", (req, res) => {
        var response = {
            "userName": req.body.userName,
            "passWord": req.body.passWord
        }
        var selectSQL = "SELECT userName,passWord FROM user_table WHERE userName='" + req.body.userName + "'AND passWord='" + req.body.passWord + "'";
        db.query(selectSQL, (err, data) => {
            if (err) {
                console.log(err)
                return
            } else if (data == "") {
                console.log("账号或密码错误")
                res.end("0")
            } else {
                console.log("OK")
                res.redirect("/index")
            }
        })
        console.log(response)
    })
    // 监听用户想要去某一个地址（路由） 渲染响应模板
app.get("/register", (req, res, next) => {
    res.render("register.art")
    next()
})
app.post("/register", (req, res) => {
    // 注册模块-
    var addSQL = 'INSERT INTO user_table (userName,passWord) VALUES(?,?)';

    var response = {
        "userName": req.body.userName,
        "passWord": req.body.passWord
    }
    var addSQLParams = [req.body.userName, req.body.passWord]
    db.query(addSQL, addSQLParams, (err, data) => {
        if (err) {
            console.log(err.message)
            return
        } else {
            res.redirect("/login")
            console.log("ok")
        }
    })
    console.log(response)
})
app.get("/index", (req, res, next) => {
    db.query('SELECT * FROM banner_table;', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.banners = data
            next()
        }
    })

})
app.get("/index", (req, res, next) => {
    db.query('SELECT ID,post_time,title FROM content_table;', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.content = data
            next()
        }
    })

})
app.get("/index", (req, res) => {
    console.log(res.banners)
    res.render("index.art", { banners: res.banners, content: res.content })
})
app.get("/content", (req, res) => {
    db.query(`SELECT * FROM content_table WHERE ID = ${req.query.id}`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(data)
            var articleData = data[0]
            articleData.post_time = common.timeDate(articleData.post_time)
            articleData.content = articleData.content.replace(/^/gm, "<p>").replace(/$/gm, "</p>")
            res.render("content.art", { content: articleData })
        }
    })
})
app.use(express.static("./www"))
app.listen(8080)