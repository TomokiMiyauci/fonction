import { copySync, outputFile, readFileSync } from 'fs-extra'
import readdirp from 'readdirp'

const main = async () => {
  copySync('src', 'temp/src')
  copySync('mod.ts', 'temp/mod.ts')
  copySync('deps.ts', 'temp/deps.ts')

  const dir = await readdirp.promise('temp')
  dir.forEach(({ fullPath }) => {
    const content = readFileSync(fullPath, { encoding: 'utf-8' })
    const replaced = content
      .replace('https://x.nest.land/arithmetic4@0.1.1/mod.ts', 'arithmetic4')
      .replace(
        /export { assert, assertEquals } from 'https:\/\/deno.land\/std\/testing\/asserts.ts'\n/,
        ''
      )
      .replace(/\.ts/g, '')
    outputFile(fullPath, replaced)
  })
}

main()
