/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import curry from '../core/curry'

// Constant (Kestrel)
// constant : a -> b -> a
const constant =
  x => () => x

export default curry(constant)
