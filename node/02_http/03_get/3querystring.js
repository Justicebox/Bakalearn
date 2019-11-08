const querystring = require("querystring");

var str = "/login?user=admin&pass=123";

// 只能解析  xxx=xxx&xxx=xxx
var json = querystring.parse(str.split("?")[1]) //我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

console.log(json)