/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import curry from '../core/curry'
import isNil from '../core/isNil'

// defaultTo : a -> b -> (a | b)
function defaultTo(def, val) {
  return isNil(val) ? def : val
}

export default curry(defaultTo)
