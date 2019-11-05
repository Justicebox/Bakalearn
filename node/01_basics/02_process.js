// process 对象是node的一个全局对象 ，提供当前node进程信息，可以再脚本任意位置使用，不必通过require命令加载
// process属性
// 1.process.argv 属性返回一个数组 ，由命令执行时的各个参数组成。第一个node。第二个脚本文件名，其余脚本文件参数
// 通过例子 真正的参数是从process.argv[2]开始的

// 2.process.stdout 返回一个对象 表示标准输出。该对象的write()该方法等同于console.log() 可用标准输出向用户显示内容
// console.log() = function(d) {
//     process.stdout.write(d + "\n")
// }

// 3. process.stdin 属性返回一个对象 表示标注输入 通常不使用