/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const Either = require('./core/Either')
const Last = require('./core/Last')
const curry = require('./core/curry')
const isFunction = require('./core/isFunction')
const isSameType = require('./core/isSameType')

const applyTransform = either =>
  either.either(Last.empty, Last)

// eitherToLast : Either b a -> Last a
// eitherToLast : (a -> Either c b) -> a -> Last b
function eitherToLast(either) {
  if(isFunction(either)) {
    return function(x) {
      const m = either(x)

      if(!isSameType(Either, m)) {
        throw new TypeError('eitherToLast: Either returing function required')
      }

      return applyTransform(m)
    }
  }

  if(isSameType(Either, either)) {
    return applyTransform(either)
  }

  throw new TypeError('eitherToLast: Either or Either returing function required')
}

module.exports = curry(eitherToLast)