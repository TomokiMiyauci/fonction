type Modules = 'rambda' | 'ramda' | 'lodash' | 'fonction'
type ExcludeModules = Exclude<Modules, 'fonction'>
type Api = {
  [k: string]:
    | {
        [m in Modules]?: string
      }
    | ExcludeModules[]
}

const ALL_MODULES: ExcludeModules[] = ['rambda', 'ramda', 'lodash']
const LAMBDAS: ExcludeModules[] = ['rambda', 'ramda']
const api: Api = {
  add: ALL_MODULES,
  and: LAMBDAS,
  chunk: {
    lodash: 'chunk'
  },
  dec: LAMBDAS,
  endsWith: ALL_MODULES,
  entries: {
    lodash: 'entries'
  },
  F: LAMBDAS,
  first: {
    ramda: 'head',
    rambda: 'head',
    lodash: 'first'
  },
  flattenDeep: {
    lodash: 'flattenDeep',
    rambda: 'flatten',
    ramda: 'flatten'
  },
  gt: ['ramda', 'lodash'],
  gte: ['ramda', 'lodash'],
  has: ALL_MODULES,
  head: {
    rambda: 'init',
    ramda: 'init',
    lodash: 'initial'
  },
  identity: ALL_MODULES,
  inc: LAMBDAS,
  isArray: ['lodash'],
  isBigint: {},
  isBoolean: ['lodash'],
  isFunction: ['lodash'],
  isNaN: ['lodash'],
  isNil: ALL_MODULES,
  isNull: ['lodash'],
  isNumber: ['lodash'],
  isObject: ['lodash'],
  isPrimitive: {},
  isString: ['lodash'],
  isSymbol: ['lodash'],
  isUndefined: ['lodash'],
  K: {},
  keys: ALL_MODULES,
  length: LAMBDAS,
  lowerCase: {
    rambda: 'toLower',
    ramda: 'toLower',
    lodash: 'toLower'
  },
  lt: ['ramda', 'lodash'],
  lte: ['ramda', 'lodash'],
  not: LAMBDAS,
  N: {
    lodash: 'not',
    rambda: 'not',
    ramda: 'not'
  },
  NN: {},
  or: LAMBDAS,
  prepend: LAMBDAS,
  product: LAMBDAS,
  props: {
    rambda: 'prop',
    ramda: 'prop',
    lodash: 'get'
  },
  replaceAll: {},
  reverse: ALL_MODULES,
  startsWith: ALL_MODULES,
  sum: ALL_MODULES,
  T: {
    rambda: 'T',
    ramda: 'T',
    lodash: 'stubTrue'
  },
  tail: ALL_MODULES,
  trim: ALL_MODULES,
  trimLeft: {
    lodash: 'trimStart'
  },
  trimRight: {
    lodash: 'trimEnd'
  },
  upperCase: {
    lodash: 'toUpper',
    rambda: 'toUpper',
    ramda: 'toUpper'
  },
  values: ALL_MODULES,
  xor: LAMBDAS,
  subtract: ALL_MODULES,
  multiply: ALL_MODULES,
  divide: ALL_MODULES,
  adjust: {
    ramda: 'adjust',
    rambda: 'adjust',
    fonction: undefined
  },
  all: {
    ramda: 'all',
    rambda: 'all',
    fonction: undefined
  },
  allPass: {
    ramda: 'allPass',
    rambda: 'allPass',
    fonction: undefined
  },
  any: {
    ramda: 'any',
    rambda: 'any',
    fonction: undefined
  },
  anyPass: {
    ramda: 'anyPass',
    rambda: 'anyPass',
    fonction: undefined
  },
  append: LAMBDAS,
  applySpec: {
    ramda: 'applySpec',
    rambda: 'applySpec',
    fonction: undefined
  },
  assoc: {
    ramda: 'assoc',
    rambda: 'assoc',
    fonction: undefined
  },
  clone: {
    ramda: 'clone',
    rambda: 'clone',
    lodash: 'cloneDeep',
    fonction: undefined
  },
  compose: {
    ramda: 'compose',
    rambda: 'compose',
    fonction: undefined
  },
  converge: {
    ramda: 'converge',
    rambda: 'converge',
    fonction: undefined
  },
  curry: {
    ramda: 'curry',
    rambda: 'curry',
    fonction: undefined
  },
  defaultTo: ['rambda', 'ramda'],
  drop: {
    ramda: 'drop',
    rambda: 'drop',
    lodash: 'drop',
    fonction: undefined
  },
  dropLast: {
    ramda: 'dropLast',
    rambda: 'dropLast',
    lodash: 'dropRight',
    fonction: undefined
  },
  equals: {
    ramda: 'equals',
    rambda: 'equals',
    lodash: 'isEqual',
    fonction: undefined
  },
  filter: {
    ramda: 'filter',
    rambda: 'filter',
    lodash: 'filter',
    fonction: undefined
  },
  find: {
    ramda: 'find',
    rambda: 'find',
    lodash: 'find',
    fonction: undefined
  },
  findIndex: {
    ramda: 'findIndex',
    rambda: 'findIndex',
    lodash: 'findIndex',
    fonction: undefined
  },
  ifElse: {},
  ifElseFn: {
    ramda: 'ifElse',
    rambda: 'ifElse'
  },
  includes: {
    ramda: 'includes',
    rambda: 'includes',
    lodash: 'includes',
    fonction: undefined
  },
  indexOf: {
    ramda: 'indexOf',
    rambda: 'indexOf',
    lodash: 'indexOf',
    fonction: undefined
  },
  is: {
    rambda: 'is',
    ramda: 'is',
    fonction: undefined
  },
  isEmpty: ALL_MODULES,
  last: ALL_MODULES,
  lastIndexOf: {
    ramda: 'lastIndexOf',
    rambda: 'lastIndexOf',
    lodash: 'lastIndexOf',
    fonction: undefined
  },
  map: ALL_MODULES,
  match: {
    ramda: 'match',
    rambda: 'match',
    fonction: undefined
  },
  merge: {
    ramda: 'merge',
    rambda: 'merge',
    lodash: 'merge',
    fonction: undefined
  },
  none: {
    ramda: 'none',
    rambda: 'none',
    fonction: undefined
  },
  omit: {
    ramda: 'omit',
    rambda: 'omit',
    lodash: 'omit',
    fonction: undefined
  },
  over: {
    ramda: 'over',
    rambda: 'over',
    fonction: undefined
  },
  path: {
    ramda: 'path',
    rambda: 'path',
    lodash: 'get',
    fonction: 'props'
  },
  slice: ALL_MODULES,
  // pick: {
  //   fonction: undefined
  // },
  // propEq: {
  //   fonction: undefined
  // },
  // range: {
  //   fonction: undefined
  // },
  // reduce: {
  //   fonction: undefined
  // },
  // repeat: {
  //   fonction: undefined
  // },
  replace: ALL_MODULES,
  // set: {
  //   fonction: undefined
  // },
  // sort: {
  //   fonction: undefined
  // },
  // sortBy: {
  //   fonction: undefined
  // },
  // split: {
  //   fonction: undefined
  // },
  // splitEvery: {
  //   fonction: undefined
  // },
  take: ALL_MODULES,
  takeLast: {
    ramda: 'takeLast',
    rambda: 'takeLast',
    lodash: 'takeRight'
  }
  // test: {
  //   fonction: undefined
  // },
  // type: {
  //   fonction: undefined
  // },
  // uniq: {
  //   fonction: undefined
  // },
  // update: {
  //   fonction: undefined
  // },
  // view: {
  //   fonction: undefined
  // }
}

export default api
