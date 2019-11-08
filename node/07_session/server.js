const express = require("express");
const cookieSession = require("cookie-session");
var server = express();
server.use(cookieSession({
    name: "user",
    keys: ["aaa", "bbb", "ccc"]
}))
server.use("/", (req, res) => {
    // 这里获取session
    console.log(req.session);
    res.send("ok")
})
server.listen(8080);