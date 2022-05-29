
const  inquirer  =  require('inquirer');
const  config  =  require('../../cliConfig')
const  download  =  require('./download')

const createAction = async (name, args) => {
  const  projectName  =  name  
  const  projectOptions  =  args

  console.log(name + '执行了')
  console.log(args)

  questions = [
    {
      type:'list', 
      name: 'fromwork',
      message: '',
      choices: config.formworkchecke,
      validate(an) {
        if(!an) {
          return '必填项'
        } else {
          return true
        }
      }
    }
  ]

  const answers = await inquirer.prompt(questions)
  const fromworkUrl = config.fromworkUrl[answers.fromwork]
  console.log('fromworkUrl', fromworkUrl)
   //  下载到缓存  
  await  download(fromworkUrl,  projectName)
}


module.exports = {
  createAction
}