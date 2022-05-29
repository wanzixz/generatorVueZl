#! /usr/bin/env node

// 引入commander
const {program} = require('commander')



const myhelp = require('../lib/core/help')
const myCommands = require('../lib/core/myCommander')

myhelp(program)


myCommands(program)



      

// 将命令行参数传入 方法，会自动解析参数命令
program.parse(process.argv)