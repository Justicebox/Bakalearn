const express = require("express");
const mysql = require("mysql");

// 1.链接
// createConnection(哪台服务器，用户名，密码，数据库)
var db = mysql.createConnection({ host: 'localhost', user: 'root', password: '9999', database: '20190129' });
console.log(db)
    // 2.查询（发送数据）
    // query（想干嘛，回调）
db.query('SELECT * FROM `user_table`;', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('查询成功')
        console.log(JSON.stringify(data))
    }
})



var server = express();
server.listen(8080)