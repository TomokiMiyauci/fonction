import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { execSync } from 'child_process'
import { reverse } from 'fonction'
import { mkdirsSync, outputJSONSync, readJSONSync } from 'fs-extra'
import { resolve } from 'path'

import { run as _run } from './gen-api'
import { replace } from './gen-api-model'

const generateModuleList = () => {
  const log = execSync('npm view fonction versions  --json')
  outputJSONSync(resolve(__dirname, '..', 'temp', 'meta.json'), {
    versions: reverse(JSON.parse(log.toString()))
  })
}
generateModuleList()

const run = async () => {
  const { versions } = readJSONSync(
    resolve(__dirname, '..', 'temp', 'meta.json'),
    {
      encoding: 'utf-8'
    }
  )
  Promise.all(
    versions.map((version) => {
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

      _run({
        version,
        apiJsonPath: apiJsonFilePath,
        editLink: false
      })
    })
  )
}

run()
