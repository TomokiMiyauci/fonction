import { ApiModel } from '@microsoft/api-extractor-model'
import { first, has, not, or, tail } from 'fonction'
import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

import { getVersionList } from './gen-full-docs'
const apiModel = new ApiModel()

const getModuleStarts = async (): Promise<Record<string, string>> => {
  const versions = getVersionList()
  const fullModuleVersionList = await Promise.all(
    versions.map((version) => {
      return [
        version,
        ...(getModuleList(
          resolve(
            __dirname,
            '..',
            'temp',
            'fonction',
            version,
            'fonction.api.json'
          )
        ) ?? [])
      ]
    })
  )
  const publicModuleVersionList = fullModuleVersionList.filter((moduleList) => {
    const version = first(moduleList)
    return not(version.includes('beta'))
  })
  return publicModuleVersionList.reduce((acc, cur) => {
    const version = first(cur)
    const modules = tail(cur)

    modules.forEach((module) => {
      if (not(has(module, acc))) {
        acc[module] = version
      }
    })

    return acc
  }, {} as Record<string, string>)
}

const getModuleList = (path: string) => {
  if (not(pathExistsSync(path))) return

  const apiPackage = apiModel.loadPackage(path)
  const moduleList = apiPackage.members[0].members
    .map(({ displayName: name, kind }) =>
      or(kind === 'Variable', kind === 'TypeAlias') ? name : undefined
    )
    .filter((_) => not(not(_)))
  return moduleList as string[]
}

export { getModuleStarts }
