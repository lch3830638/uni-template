// 转化为promise形式的api
const toPromise = (api) => {
  return (config) => {
    return new Promise((resolve, reject) => {
      api({
        ...config,
        success: resolve,
        fail: reject,
      })
    })
  }
}

// 需要转换的api数组
const toPromiseAPIs = [
  'login',
]

toPromiseAPIs.forEach(key => {
  uni[key] = toPromise(uni[key])
})
