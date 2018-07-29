/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const _types = {
  'unk': () => 'unknown',
  'All': () => 'All',
  'Any': () => 'Any',
  'Arrow': () => 'Arrow',
  'Assign': () => 'Assign',
  'Async': () => 'Async',
  'Const': inner => `Const(${inner})`,
  'Either': () => 'Either',
  'Endo': () => 'Endo',
  'Equiv': () => 'Equiv',
  'First': () => 'First',
  'Identity': () => 'Identity',
  'IO': () => 'IO',
  'Last': () => 'Last',
  'List': () => 'List',
  'Max': () => 'Max',
  'Maybe': () => 'Maybe',
  'Min': () => 'Min',
  'Pair': () => 'Pair',
  'Pred': () => 'Pred',
  'Prod': () => 'Prod',
  'Reader': () => 'Reader',
  'Result': () => 'Result',
  'Star': () => 'Star',
  'State': () => 'State',
  'Sum': () => 'Sum',
  'Tuple': (n) => `${n}-Tuple`,
  'Unit': () => 'Unit',
  'Writer': () => 'Writer'
}

export const type =
  type => _types[type] || _types['unk']

export const proxy =
  (t, ctx) => ({ type: () => type(t)(ctx) })

export const typeFn = (t, ver, ctx) => {
  const typeStr = type(t)(ctx)
  return `crocks/${typeStr}@${ver || 0}`
}
