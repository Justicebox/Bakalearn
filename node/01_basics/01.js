console.log("hello world")

// 变量
var a = 10;
console.log(a);

// 新建对象
var date = new Date();
console.log(date.getFullYear())

// 正则 
var reg = /\d+/g;
var str = "c268e9r4xa98c128qwe12xqwr98xr98 98 qwv98r";
console.log(str.match(reg))

function fn() {
    console.log("我是函数内的逻辑")
}
fn()