let  downloadFn  =  require('download-git-repo')
const  ora  =  require('ora')


const download = function(url, projectName) {
  // 组装处理下载代码的 目标 路径
  const destDir = process.cwd().replace(/\\/g, '/')
  // 等待中的交互开始
  const spinner = ora()
  spinner.text = 'Loading……'
  console.log('direct:'+url)
  // 执行下载操作
  downloadFn('direct:'+url,  destDir+'/'+projectName,  {  clone:  true  },  (err) => {
    console.log(err)
    if (!err) {
      spinner.succeed('下载成功')
    }else {
      spinner.fail('下载失败')
      // console.log(err)
    }
  })
}

module.exports = download