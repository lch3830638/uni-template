import request from '@/utils/request'

// 测试api
const getGoodsListURL = '/goods'
const getGoodsListKey = `get${getGoodsListURL}`
const getGoodsList = (params) => {
  return request({
    url: getGoodsListURL,
    params,
  })
}

export { getGoodsListKey, getGoodsList }
