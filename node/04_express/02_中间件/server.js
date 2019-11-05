const express = require("express")
var server = express();

// server.get("/", () => {
//     console.log("有get请求")
// })
// server.post("/", () => {
//     console.log("有post请求")
// })

server.use("/", () => {
    console.log("有sue执行")
})
server.listen(8080)