const fs = require("fs");
const path = require("path");
var str = "c:\\www\\abc\\aaa\\a.txt";
console.log(path.parse(str))

fs.rename("./aaa.txt", "./bbb.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("修改成功")
    }
})