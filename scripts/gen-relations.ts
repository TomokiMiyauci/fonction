import { ApiModel } from '@microsoft/api-extractor-model'
import { head, N, or, tail } from 'fonction'
import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

const apiModel = new ApiModel()

const getModuleStarts = async (
  versions: string[]
): Promise<Record<string, string>> => {
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
    const version = head(moduleList)
    return N(version.includes('beta'))
  })
  return publicModuleVersionList.reduce((acc, cur) => {
    const version = head(cur)
    const modules = tail(cur)

    modules.forEach((module) => {
      acc[module] = version
    })

    return acc
  }, {} as Record<string, string>)
}

const formatModuleStats = (stats: Record<string, string>, versions: string[]) =>
  Object.entries(stats).reduce(
    (acc, [key, version]) => {
      return {
        ...acc,
        [key]: {
          version,
          linkable: versions.includes(version as string)
        }
      }
    },
    {} as Record<
      string,
      {
        version: string
        linkable: boolean
      }
    >
  )

const getModuleList = (path: string) => {
  if (N(pathExistsSync(path))) return

  const apiPackage = apiModel.loadPackage(path)
  const moduleList = apiPackage.members[0].members
    .map(({ displayName: name, kind }) =>
      or(kind === 'Variable', kind === 'TypeAlias') ? name : undefined
    )
    .filter((_) => N(N(_)))
  return moduleList as string[]
}

export { formatModuleStats, getModuleStarts }
