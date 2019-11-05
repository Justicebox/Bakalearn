const express = require("express");
var server = express();
var router1 = express.Router();
server.use("/home", router1)
router1.get("/aa", () => {
    console.log("aa")
})
router1.get("/bb", () => {
    console.log("bb")
})
server.listen(8080)