/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const VERSION = 1

const _implements = require('../core/implements')
const _inspect = require('../core/inspect')
const type = require('../core/types').type('Min')
const _type = require('../core/types').typeFn(type(), VERSION)
const fl = require('../core/flNames')

const isNil = require('../core/isNil')
const isNumber = require('../core/isNumber')
const isSameType = require('../core/isSameType')

const _empty =
  () => Min(Infinity)

function Min(n) {
  const x = isNil(n) ? _empty().valueOf() : n

  if(!arguments.length || !isNumber(x)) {
    throw new TypeError('Min: Numeric value required')
  }

  const valueOf =
    () => x

  const empty =
    _empty

  const inspect =
    () => `Min${_inspect(valueOf())}`

  function concat(m) {
    if(!isSameType(Min, m)) {
      throw new TypeError('Min.concat: Min required')
    }

    return Min(Math.min(x, m.valueOf()))
  }

  return {
    inspect, toString: inspect, valueOf,
    type, concat, empty,
    [fl.empty]: empty,
    [fl.concat]: concat,
    ['@@type']: _type,
    constructor: Min
  }
}

Min['@@implements'] = _implements(
  [ 'concat', 'empty' ]
)

Min.empty = _empty
Min.type = type

Min[fl.empty] = _empty
Min['@@type'] = _type

module.exports = Min
