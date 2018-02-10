! function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = factory()) :
    typeof define === 'function' && define.amd ? define(factory) : (global._helper = factory())
}(window, function () {

  const helper = {

    //全屏跳转
    fullWindow: function (url) {
      const params = [
        'height=' + screen.height,
        'width=' + screen.width,
        'fullscreen=yes',
        'location=no'
      ].join(',')

      let popup = window.open(url, '', params)
      popup.moveTo(0, 0)
    },

    //时间格式化
    timeFormat(date, format) {
      if (!date) {
        console.error('date is necessary!')
        return undefined
      } else if (!format) {
        return date
      }
      const timeType = {
        'Y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }

      let result = format
      for (let key in timeType) {
        if (new RegExp(`(${key})`).test(result)) {
          if (key === 'Y+') {
            result = result.replace(RegExp.$1, timeType[key])
          } else {
            result = result.replace(RegExp.$1, timeType[key] > 10 ? timeType[key] : `0${timeType[key]}`)
          }
        }
      }
      return result
    }
  }

  return helper

})