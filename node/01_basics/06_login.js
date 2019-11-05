// 用户数据
var users = {
    "admin": 123,
    "user1": 456,
    "user2": 789
}

process.stdout.write('请输入用户名 \n');
// 接收用户的输入
var i = 0;
var user = '';
process.stdin.on("data", (input) => {
    console.log(input.toString())
        // 对传进来的数据进行处理
    input = input.toString().trim();
    if (i == 0) {
        if (Object.keys(users).indexOf(input) == -1) {
            console.log("用户名错误")
        } else {
            i = 1;
            user = input;
            console.log("请输入密码")
        }
    } else {
        // 判断密码
        // console.log(users[user])
        if (users[user] == input) {
            console.log("登陆成功")
        } else {
            console.log("密码错误")
            console.log("请输入密码")
        }
    }
})