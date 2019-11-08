const express = require("express");
// const bodyParser = require("body-parser");
var server = express();
// server.use(bodyParser.urlencoded({ extended: false }))
server.post("/", (req, res) => {
    // console.log(req.body)
    console.log(req.files)
})
server.listen(8080)