import test from 'tape'
import { bindFunc } from '../test/helpers'



import isFunction from '../core/isFunction'
import unit from '../core/_unit'

import once from './once'

test('once helper', t => {
  const f = bindFunc(once)

  t.ok(isFunction(once), 'is a function')

  const err = /once: Function required/
  t.throws(f(undefined), err, 'throws with undefined')
  t.throws(f(null), err, 'throws with null')
  t.throws(f(0), err, 'throws with falsey number')
  t.throws(f(1), err, 'throws with truthy number')
  t.throws(f(''), err, 'throws with falsey string')
  t.throws(f('string'), err, 'throws with truthy string')
  t.throws(f(false), err, 'throws with false')
  t.throws(f(true), err, 'throws with true')
  t.throws(f({}), err, 'throws with an object')
  t.throws(f([]), err, 'throws with an array')

  t.doesNotThrow(f(unit), 'allows a function')

  t.end()
})
