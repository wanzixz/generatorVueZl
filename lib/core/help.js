const myhelp = function (program) {

  // 添加命令选项 (help 时打印展示)
program.option('-f --framework <framework>', '设置框架')
program.option('-d --dest <dest>', '设置框架目录')

// 提示信息
const examples = {
  create: ['mycli createcrt <project>'],
  config: ['mycli configcfg set <k> <v>','mycli configcfg get <k>']
}

// 事件监听的方式，处理 help 提示信息
program.on('help', () => {
  console.log('Examples: ')
  Object.keys(examples).forEach(function (actionName) {
    examples[actionName].forEach((item) => {
      console.log(' ' + item)
    })
  })
})

}

module.exports = myhelp