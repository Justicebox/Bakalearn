const express = require("express");
var server = express();
server.use(express.static("www"))
server.listen(8080)