const express = require("express");

var serevr = express();
serevr.use("/", (req, res) => {
    // 清除cookie
    res.clearCookie("user")
    res.send("ok")
})
serevr.listen(8080)