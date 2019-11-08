const express = require("express");
const content = require("./content")
var router = express.Router();
// 将/content 的任务交给content.js
router.get("/content", content)
router.get("/product", (req, res) => {
    console.log(req.path)
})


module.exports = router