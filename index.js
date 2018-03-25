'use strict'
module.exports = (arr, func) => {
  const some = arr.filter(func)
  return some.length !== 0 && some.length !== arr.length
}
