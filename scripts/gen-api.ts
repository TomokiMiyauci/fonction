import {
  ApiDocumentedItem,
  ApiItem,
  ApiModel,
  ApiVariable
} from '@microsoft/api-extractor-model'
import {
  DocBlock,
  DocCodeSpan,
  DocFencedCode,
  DocNode,
  DocParagraph,
  DocPlainText,
  DocSection
} from '@microsoft/tsdoc'
import { configure, renderFile } from 'eta'
import { isUndefined, replace } from 'fonction'
import { outputFileSync, pathExistsSync, readFileSync } from 'fs-extra'
import { join, resolve } from 'path'

const apiModel = new ApiModel()
const copyright =
  '// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.\n'
const getSummary = ({ nodes }: DocSection): string => {
  const _nodeSection = nodes[0]
  if (_nodeSection instanceof DocParagraph) {
    const summary = _nodeSection.nodes.map((n) => {
      if (n instanceof DocPlainText || n instanceof DocCodeSpan) {
        const _n = n as DocPlainText
        return _n.kind === 'PlainText'
          ? _n.text
          : _n.kind === 'CodeSpan'
          ? `\`${((_n as unknown) as DocCodeSpan).code}\``
          : ''
      }
      return ''
    })

    return summary.join('') ?? ''
  }
  return ''
}

const getExampleCode = (
  customBlocks: readonly DocBlock[]
): [string, string][] | [] => {
  if (!customBlocks.length) return []
  return customBlocks
    .map(({ content }) => {
      const _docFencedCode = content.nodes[1]
      if (isDocFencedCode(_docFencedCode)) {
        const { code, language } = _docFencedCode
        return [language, code] as [string, string]
      }
    })
    .filter((_) => !!_)
}

const isDocParagraph = (docNode: DocNode): docNode is DocParagraph =>
  docNode instanceof DocParagraph

const isDocPlainText = (docNode: DocNode): docNode is DocPlainText =>
  docNode instanceof DocPlainText

const isDocCodeSpan = (docNode: DocNode): docNode is DocCodeSpan =>
  docNode instanceof DocCodeSpan
const isDocFencedCode = (docNode: DocNode): docNode is DocFencedCode =>
  docNode instanceof DocFencedCode

const getRemarks = (docBlock: DocBlock | undefined) => {
  if (isUndefined(docBlock)) return []

  const remarksMatrix = docBlock.content.nodes.map((_node) =>
    isDocParagraph(_node)
      ? _node.nodes
          .map((_node) => getDocPlainText(_node) || getDocCodeSpan(_node))
          .filter((_) => !!_)
      : []
  )

  return remarksMatrix.map((remarks) => remarks.join(''))
}

const getDocCodeSpan = (docNode: DocNode): string => {
  if (isDocCodeSpan(docNode)) {
    return `\`${docNode.code}\``
  }

  return ''
}

const getDocFencedCode = (docNode: DocNode): string => {
  if (isDocFencedCode(docNode)) {
    return `\`${docNode.code}\``
  }

  return ''
}

const getTestCase = (path: string): string => {
  if (pathExistsSync(path)) {
    const testContent = readFileSync(path, { encoding: 'utf-8' })
    return replace(copyright, '', testContent)
  }
  return ''
}

const getDocPlainText = (docNode: DocNode): string => {
  if (isDocPlainText(docNode)) {
    return docNode.text
  }

  return ''
}

interface MdVariables {
  name: string
  description: string
  examples: [string, string][]
  signature: string
  tagName: string
  deprecated: boolean
  remarks: string[]
  isLatest: boolean
  test: string
}

const render = async (mdArgs: MdVariables): Promise<string> => {
  configure({
    views: resolve(__dirname, '..', 'docs', 'views'),
    autoEscape: false
  })

  const md = await renderFile(join('.', 'api'), mdArgs)

  return md || ''
}

const generate = (path: string, content: string): void =>
  outputFileSync(path, content)

type ExportKind = 'Fn' | 'Type'
const mapMember = ({
  isLatest,
  type
}: {
  isLatest: boolean
  type: ExportKind
}) => async (
  member: ApiItem
): Promise<{
  name: string
  md: string
}> => {
  const { displayName: name, excerpt } = member as ApiVariable
  const signature = excerpt.text

  if (member instanceof ApiDocumentedItem && member.tsdocComment) {
    const {
      summarySection,
      customBlocks,
      modifierTagSet,
      deprecatedBlock,
      remarksBlock
    } = member.tsdocComment

    const remarks = getRemarks(remarksBlock)
    const isDeprecated = !!deprecatedBlock
    const tagName = modifierTagSet.nodes[0]?.tagName ?? ''
    const description = getSummary(summarySection)
    const examples = getExampleCode(customBlocks)
    const test =
      type === 'Fn'
        ? getTestCase(resolve(__dirname, '..', 'test', `${name}.test.ts`))
        : ''
    const md = await render({
      name,
      description,
      examples,
      signature,
      tagName,
      deprecated: isDeprecated,
      remarks,
      isLatest,
      test
    })

    return {
      name,
      md
    }
  }
}
const run = async ({
  version,
  apiJsonPath,
  editLink = true,
  isLatest
}: {
  version: string
  apiJsonPath: string
  editLink?: boolean
  isLatest: boolean
}): Promise<void> => {
  const apiPackage = apiModel.loadPackage(apiJsonPath)

  apiPackage.members.forEach(async (root) => {
    const functionContents = await Promise.all(
      root.members
        .filter(({ kind }) => kind === 'Variable')
        .map(mapMember({ isLatest, type: 'Fn' }))
    )

    const typesContents = await Promise.all(
      root.members
        .filter(({ kind }) => kind === 'TypeAlias')
        .map(mapMember({ isLatest, type: 'Type' }))
    )

    const mdFunctions = functionContents.filter((_) => !!_).map(({ md }) => md)
    const mdTypes = typesContents.filter((_) => !!_).map(({ md }) => md)
    const merged = mdFunctions.join('\n')
    const mergedTypesMd = mdTypes.join('\n')

    const frontmatter = `---
editLink: false
---

`

    generate(
      resolve(__dirname, '..', 'docs', 'api', version, 'index.md'),
      `${editLink ? '' : frontmatter}# API

## Functions

${merged}

## Types

${mergedTypesMd}
`
    )
  })
}

if (require.main === module) {
  run({
    version: '',
    apiJsonPath: resolve(__dirname, '..', 'temp', 'fonction.api.json'),
    isLatest: true
  })
}

export { run }
