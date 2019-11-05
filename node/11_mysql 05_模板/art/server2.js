const express = require("express");
const mysql = require("mysql")
var app = express();
// 设置视图引擎
app.engine("art", require("express-art-template"));
// node express-art-template 需要生产环境
app.set("view options", {
        debug: process.env.NODE_ENV !== "production"
    })
    // 1.链接
    // createConnection 连接池 creatPool
var db = mysql.createPool({ host: 'localhost', user: 'root', password: '9999', database: '20190129' });
console.log(db)

// 默认的路由配置
// app.get("/", (req, res) => {
//     res.render("index.art", {
//         user: {
//             name: "aui",
//             tags: ["art", "template", "express", "node"]
//         }
//     })
// })



// db.query('SELECT * FROM `user_table`;', (err, data) => { //查询是否链接成功
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('查询成功')
//         console.log(JSON.stringify(data))
//     }
// })





app.get("/", (req, res, next) => {
        db.query('SELECT * FROM `banner_table`;', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.banners = data
                next()
            }
        })
    })
    // app.get("/", (req, res, next) => {
    //     db.query('SELECT * FROM `content_table`;', (err, data) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             res.content = data
    //             next()
    //         }
    //     })
    // })
app.get("/", (req, res) => {
    res.render("index.art", { banners: res.banners, content: res.content })
})
app.use(express.static('./www'))

app.listen(8080);