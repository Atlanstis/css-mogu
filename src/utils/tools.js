/**
 * 对比 url 与 restUrl，返回 restUrl 中的请求参数
 * @param {请求链接} url
 * @param {restful 链接} restUrl
 */
export const getParamsFromRestful = (url, restUrl) => {
  const paramsUrl = url.split('/')
  const paramsRestUrl = restUrl.split('/')
  let diff = {}

  paramsUrl.forEach((item, index) => {
    if (item !== paramsRestUrl[index]) {
      diff[paramsRestUrl[index].substr(1)] = item
    }
  })

  return diff
}
