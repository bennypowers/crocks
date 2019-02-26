/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import compose from '../core/compose'
import curry from '../core/curry'
import isFunction from '../core/isFunction'

// Composition (Bluebird)
// composeB :: (b -> c) -> (a -> b) -> a -> c
function composeB(f, g) {
  if(!(isFunction(f) && isFunction(g))) {
    throw new TypeError(
      'composeB: Functions required for first two arguments'
    )
  }

  return compose(f, g)
}

export default curry(composeB)
