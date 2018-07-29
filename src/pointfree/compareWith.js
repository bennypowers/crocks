/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import curry from '../core/curry'
import isFunction from '../core/isFunction'

function compareWith(x, y, m) {
  if(!(m && isFunction(m.compareWith))) {
    throw new TypeError('compareWith: Equiv required for third argument')
  }

  return m.compareWith(x, y)
}

export default curry(compareWith)
