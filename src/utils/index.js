// 这里会写一些可以复用的功能

const utils = {}

/**
 * 打开一个新的页面
 * @param {string} url 要打开的 url
 */
utils.open = function (url) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'web--admin-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('web-chat-admin-link-temp'))
}

/**
 * 防抖
 * @param {Function} cb 防抖时执行的回调
 * @param {number} wait 防抖时间间隔
 * @param {immediate} immediate 是否马上执行一次
 */
// utils.debounce = function (cb, wait, immediate) {
//   let timer
//   return function () {
//     const args = arguments
//     const context = this
//     if (timer) clearTimeout(timer)
//     if (immediate) {
//       const callNow = !timer
//       timer = setTimeout(() => {
//         timer = null
//       }, wait)
//       if (callNow) return cb.apply(context, args)
//     } else {
//       timer = setTimeout(function () {
//         return cb.apply(context, args)
//       }, wait)
//     }
//   }
// }

/**
 * 获取时间范围 时间戳 毫秒
 * @param {number} range 与今天相差的天数
 */
utils.getTimeRange = function (range) {
  const today = +new Date()
  const date = today + range * 24 * 60 * 60 * 1000
  return range > 0 ? [today, date] : [date, today]
}

export default utils
