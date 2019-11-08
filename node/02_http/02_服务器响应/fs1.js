const fs = require("fs");

// 参数  readFile("文件名"，回调函数)
// node错误回调优先

fs.readFile("./aaa.txt", function(err, data) {
    if (err) {
        console.log("读取失败" + err)
    } else {
        console.log(`读取成功${data}`)
    }
})