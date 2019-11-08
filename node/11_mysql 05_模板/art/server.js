const express = require("express");
var app = express();
// 设置视图引擎
app.engine("art", require("express-art-template"));
// node express-art-template 需要生产环境
app.set("view options", {
        debug: process.env.NODE_ENV !== "production"
    })
    // 默认的路由配置
app.get("/", (req, res) => {
    res.render("index.art", {
        user: {
            name: "aui",
            tags: ["art", "template", "express", "node"]
        }
    })
})

app.listen(8080);