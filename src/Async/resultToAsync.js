/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import Async from './index'
import { proxy } from '../core/types'
const Result = proxy('Result')

import curry from '../core/curry'
import isFunction from '../core/isFunction'
import isSameType from '../core/isSameType'

const applyTransform = either =>
  either.either(Async.Rejected, Async.Resolved)

// resultToAsync : Result e a -> Async e a
// resultToAsync : (a -> Result e b) -> a -> Async e b
function resultToAsync(result) {
  if(isFunction(result)) {
    return function(x) {
      const m = result(x)

      if(!isSameType(Result, m)) {
        throw new TypeError('resultToAsync: Result returning function required')
      }

      return applyTransform(m)
    }
  }

  if(isSameType(Result, result)) {
    return applyTransform(result)
  }

  throw new TypeError('resultToAsync: Result or Result returning function required')
}

export default curry(resultToAsync)
