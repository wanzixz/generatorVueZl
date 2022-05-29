const myCommands = function (program) {

  // 引入 action
const { createAction } = require('./actions')

  // 定义自定义指令参数
program.command('create <project> [others...]') // 定义命令参数
.alias('crt') // 命令参数别名
.description('创建新项目') // --help 展示命令提示
.action(createAction)

// 添加 可配置项 的自定义命令
program.command('config <setget> [others...]')
.alias('cfg').description('配置项目')
.action((name, args) => {
  console.log(name + '执行了')
  console.log(args)
}) 


}

module.exports = myCommands 