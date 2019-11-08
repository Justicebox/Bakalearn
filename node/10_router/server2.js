const express = require("express");
const home = require("./routers/home");
var server = express();

server.use("/home", home)

server.listen(8080)