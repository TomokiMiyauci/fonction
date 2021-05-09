import { render } from 'eta'
import { entries, has, isArray, props } from 'fonction'

import api from '../api'

const getApiListTable = (): string => {
  const _api = entries(api)
  _api.sort((p1, p2) => {
    const p1Key = p1[0],
      p2Key = p2[0]
    if (p1Key < p2Key) {
      return -1
    }
    if (p1Key > p2Key) {
      return 1
    }
    return 0
  })

  const tableList = _api.reduce((acc, [moduleName, arr]) => {
    if (isArray(arr)) {
      return {
        ...acc,
        [moduleName]: arr.reduce(
          (acc, cur) => {
            return { ...acc, [cur]: moduleName }
          },
          { fonction: moduleName }
        )
      }
    } else {
      const isNoImplement = has('fonction', arr)
        ? props('fonction', arr)
          ? props('fonction', arr)
          : undefined
        : moduleName
      return { ...acc, [moduleName]: { ...arr, fonction: isNoImplement } }
    }
  }, {} as any)

  const header = `| Name | Fonction | Rambda | Ramda | Lodash |
  | ------ | -------- | ------ | ------ | ------ |
  `
  const template = `| <%= it.moduleName %> | <%= it.fonction === it.moduleName ? '[✅](#' + it.moduleName.toLowerCase() + ')' : it.fonction ? '[' + it.fonction + '](#' + it.fonction.toLowerCase() + ')' : '' %> | <%= it.rambda === it.moduleName ? '[✅](https://selfrefactor.github.io/rambda/#/?id=' + it.moduleName.toLowerCase() + ')' : it.rambda ?? '' %> | <%= it.ramda === it.moduleName ? "✅" : it.ramda ?? '' %> | <%= it.lodash === it.moduleName ? "✅" : it.lodash ?? '' %> |`

  const body = entries(tableList).map(([moduleName, fn]: any) => {
    return render(template, {
      moduleName,
      fonction: fn['fonction'],
      rambda: fn['rambda'],
      ramda: fn['rambda'],
      lodash: fn['lodash']
    })
  })

  return `<details class="parameters-detail">
  <summary>Cross-functional comparison</summary>

  ${header}${body.join('\n')}

  </details>
  `
}

export { getApiListTable }
