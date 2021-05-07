import { render } from 'eta'
import { has, isArray, props } from 'fonction'

import api from '../api'

const getApiListTable = (): string => {
  const tableList = Object.entries(api).reduce((acc, [moduleName, arr]) => {
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
  const template = `| <%= it.moduleName %> | <%= it.fonction === it.moduleName ? "✅" : it.fonction ?? '' %> | <%= it.rambda === it.moduleName ? "✅" : it.rambda ?? '' %> | <%= it.ramda === it.moduleName ? "✅" : it.ramda ?? '' %> | <%= it.lodash === it.moduleName ? "✅" : it.lodash ?? '' %> |`

  const body = Object.entries(tableList).map(([moduleName, fn]: any) => {
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
