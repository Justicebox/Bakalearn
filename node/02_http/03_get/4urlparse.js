const urlLib = require("url");

var str = "/login?user=admin&pass=123";

var json = urlLib.parse(str, true); //我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

console.log(json.pathname, json.query) //  pathname login   //query 账户密码
    // console.log(json)