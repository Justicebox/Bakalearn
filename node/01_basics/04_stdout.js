var f = [];
f[f.length] = "                                                                   全军出击~~~~~";
f[f.length] = "                                                     全军出击~~~~~";
f[f.length] = "                                       全军出击~~~~~";
f[f.length] = "                         全军出击~~~~~";
f[f.length] = "           全军出击~~~~~";

var current = 0;
var render = () => {
    // 清空控制台
    process.stdout.write('\033[2j');
    if (current == f.length) current = 0;
    process.stdout.write(f[current++]);
}
setInterval(render, 1000)