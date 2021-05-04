import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { readFileSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'

const replace = (path: string): void => {
  const content = readFileSync(path, {
    encoding: 'utf-8'
  })

  const replaced = content
    .replace(/isNaN_2/g, 'isNaN')
    .replace(/length_2/g, 'length')
  writeFileSync(path, replaced)
}

const rootPath = resolve(__dirname, '..')
const json = resolve(rootPath, 'temp', 'fonction.api.json')
const run = () => {
  const apiExtractorJsonPath = resolve(rootPath, 'api-extractor.json')

  const extractorConfig = ExtractorConfig.loadFileAndPrepare(
    apiExtractorJsonPath
  )
  const extractorResult = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true
  })

  if (extractorResult.succeeded) {
    console.log(`API Extractor completed successfully`)

    replace(json)

    process.exitCode = 0
  } else {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors` +
        ` and ${extractorResult.warningCount} warnings`
    )
    process.exitCode = 1
  }
}

if (require.main === module) {
  run()
}

export { replace }
