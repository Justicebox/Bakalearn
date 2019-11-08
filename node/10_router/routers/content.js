const express = require("express");
var router = express.Router();
router.get("/content", (req, res) => {
    console.log(req.path)
})
module.exports = router