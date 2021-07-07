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
  advance: {},
  add: ALL_MODULES,
  and: LAMBDAS,
  chunk: {
    lodash: 'chunk'
  },
  constructorName: [],
  dec: LAMBDAS,
  F: LAMBDAS,
  head: {
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
  init: ALL_MODULES,
  identity: ALL_MODULES,
  inc: LAMBDAS,
  K: {},
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
  sum: ALL_MODULES,
  T: {
    rambda: 'T',
    ramda: 'T',
    lodash: 'stubTrue'
  },
  tail: ALL_MODULES,
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
  curry: ['lodash', 'rambda', 'ramda'],
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
  equal: {
    ramda: 'equals',
    rambda: 'equals',
    lodash: 'isEqual'
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
  pipe: ['rambda', 'ramda'],
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
  tap: ['lodash', 'rambda', 'ramda'],
  take: ALL_MODULES,
  takeLast: {
    ramda: 'takeLast',
    rambda: 'takeLast',
    lodash: 'takeRight'
  },
  tryCatch: ['rambda', 'ramda'],
  // type: {
  //   fonction: undefined
  // },
  uniq: ['ramda', 'rambda', 'lodash']
  // update: {
  //   fonction: undefined
  // },
  // view: {
  //   fonction: undefined
  // }
}

export default api
