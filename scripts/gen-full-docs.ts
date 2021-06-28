import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { execSync } from 'child_process'
import { take } from 'fonction'
import { mkdirsSync, outputJSONSync, readJSONSync } from 'fs-extra'
import { resolve } from 'path'

import { run as _run } from './gen-api.ts'
import { replace } from './gen-api-model.ts'
import { formatModuleStats, getModuleStarts } from './gen-relations.ts'
const getVersionList = (): string[] => {
  const log = execSync('npm view fonction versions  --json')
  return JSON.parse(log.toString())
}

const generateModuleList = (): void => {
  const versions = getVersionList().reverse()
  outputJSONSync(resolve(__dirname, '..', 'temp', 'meta.json'), {
    versions
  })
}

const generateApiJson = (version: string): string => {
  const baseDir = resolve(__dirname, '..', 'temp', 'fonction', version)
  mkdirsSync(baseDir)

  execSync(`yarn --cwd temp/fonction/${version}/ init -y`)
  execSync(`yarn --cwd temp/fonction/${version}/ add fonction@${version}`)
  const apiJsonFilePath = resolve(baseDir, 'fonction.api.json')
  const extractorConfig = ExtractorConfig.prepare({
    configObject: {
      mainEntryPointFilePath: resolve(
        baseDir,
        'node_modules',
        'fonction',
        'dist',
        'index.es.d.ts'
      ),
      compiler: {
        tsconfigFilePath: resolve(__dirname, '..', 'tsconfig.json')
      },

      projectFolder: baseDir,

      docModel: {
        enabled: true,
        apiJsonFilePath
      }
    },
    configObjectFullPath: undefined,
    packageJsonFullPath: resolve(baseDir, 'package.json')
  })

  Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true
  })

  replace(apiJsonFilePath)
  return apiJsonFilePath
}

const run = async () => {
  const { versions }: { versions: string[] } = readJSONSync(
    resolve(__dirname, '..', 'temp', 'meta.json'),
    {
      encoding: 'utf-8'
    }
  )

  const list = await Promise.all(
    versions.map((version) => [version, generateApiJson(version)] as const)
  )

  const moduleVersions = await getModuleStarts(versions)
  const formattedModuleVersions = formatModuleStats(
    moduleVersions,
    take(10, versions)
  )

  take(10, list).forEach(([version, path]) => {
    _run({
      version,
      apiJsonPath: path,
      editLink: false,
      isLatest: false,
      moduleVersions: formattedModuleVersions
    })
  })
}

if (require.main === module) {
  generateModuleList()
  run()
}

export { getVersionList }
