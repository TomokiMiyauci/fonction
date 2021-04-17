import { outputFileSync, readdirSync, readFileSync } from 'fs-extra'
import { parse, resolve } from 'path'

const getFileInfo = (path: string): FileInfo => {
  const content = readFileSync(path, { encoding: 'utf-8' })
  const { name, ext } = parse(path)

  return {
    path,
    content,
    name: name.replace(/fonction\.?/, ''),
    ext
  }
}

type FileInfo = {
  path: string
  content: string
  name: string
  ext: string
}

const run = () => {
  const fileNames = readdirSync(resolve('temp', '.markdown'), {
    encoding: 'utf-8'
  }).filter((fileName) => fileName !== 'index.md')

  const filesPath = fileNames.map((fileName) =>
    resolve('temp', '.markdown', fileName)
  )

  const filesInfo = filesPath.map((path) => getFileInfo(path))

  filesInfo.forEach(({ content, name }) => {
    const replaced = content
      .replace(/\[Home\].*/, '')
      .replace(/\.\/fonction\.(.+)\.md/g, `./$1/`)
    // .replace(/\r?\n```/g, '```')
    const to = resolve('docs', 'api', name, 'index.md')
    outputFileSync(to, replaced)
  })
}

run()
