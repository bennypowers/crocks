import test from 'tape'

import isFunction from './isFunction'
import unit from './_unit'

import isObject from './isObject'

test('isObject core', t => {
  t.ok(isFunction(isObject), 'is a function')

  t.equal(isObject(unit), false, 'returns false with function')
  t.equal(isObject(undefined), false, 'returns false with undefined')
  t.equal(isObject(null), false, 'returns false with null')
  t.equal(isObject(0), false, 'returns false with falsey number')
  t.equal(isObject(1), false, 'returns false with truthy number')
  t.equal(isObject(''), false, 'returns false with falsey string')
  t.equal(isObject('string'), false, 'returns false with truthy string')
  t.equal(isObject(false), false, 'returns false with false')
  t.equal(isObject(true), false, 'returns false with true')
  t.equal(isObject([]), false, 'returns false with an array')

  t.equal(isObject({}), true, 'returns true with an object')

  t.end()
})
