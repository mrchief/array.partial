'use strict'
module.exports = function (arr, func) {
  const some = arr.filter(func)
  return some.length !== 0 && some.length !== arr.length
}
