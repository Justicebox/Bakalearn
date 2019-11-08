console.log("argv:", process.argv)

// 运行的时候 node 03_argv.js a b c
// ["node", "node 03_argv.js", "a", "b", "c"];

var arrs = process.argv.slice(2)
console.log(arrs)