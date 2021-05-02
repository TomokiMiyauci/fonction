import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { readFileSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'

const replace = () => {
  const content = readFileSync(json, {
    encoding: 'utf-8'
  })

  const replaced = content
    .replace(/isNaN_2/g, 'isNaN')
    .replace(/length_2/g, 'length')
  writeFileSync(json, replaced)
}
const rootPath = resolve(__dirname, '..')
const json = resolve(rootPath, 'temp', 'fonction.api.json')
const apiExtractorJsonPath: string = resolve(rootPath, 'api-extractor.json')

const extractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath)
const extractorResult = Extractor.invoke(extractorConfig, {
  localBuild: true,
  showVerboseMessages: true
})

if (extractorResult.succeeded) {
  console.log(`API Extractor completed successfully`)

  replace()

  process.exitCode = 0
} else {
  console.error(
    `API Extractor completed with ${extractorResult.errorCount} errors` +
      ` and ${extractorResult.warningCount} warnings`
  )
  process.exitCode = 1
}
