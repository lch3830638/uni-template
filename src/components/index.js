const componentsFiles = require.context('./', true, /\.vue$/)
const components = componentsFiles.keys().reduce((prev, curr) => {
  const nameArr = curr.replace(/^\.\/(.*)\.vue$/, '$1').split('/')
  const name = nameArr.reverse().find(v => {
    return v !== 'index'
  })
  if (name.startsWith('_')) {
    return prev
  }
  prev[name] = componentsFiles(curr).default
  return prev
}, {})
module.exports = components
