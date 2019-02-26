/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import isNil from '../core/isNil'

export default function valueOf(m) {
  if(isNil(m)) {
    return m
  }

  return m.valueOf()
}
