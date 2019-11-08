const fs = require("fs");

// 参数   writeFile(文件名，内容，回调函数)
fs.writeFile("aaa.txt", "bbbbbbbb", (err) => {
    if (err) {
        console.log("写入失败" + err)
    } else {
        console.log("写入成功")
    }
})