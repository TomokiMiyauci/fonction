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
  DocLinkTag,
  DocNode,
  DocParagraph,
  DocParamCollection,
  DocPlainText,
  DocSection
} from '@microsoft/tsdoc'
import { configure, renderFile } from 'eta'
import { isUndefined, replace } from 'fonction'
import { outputFileSync, pathExistsSync, readFileSync } from 'fs-extra'
import { join, resolve } from 'path'

import { getApiListTable } from './gen-api-list.ts'
import { getModuleStarts } from './gen-relations'
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
const isDocLinkTag = (docNode: DocNode): docNode is DocLinkTag =>
  docNode instanceof DocLinkTag
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

const getDocLinkTag = (docNode: DocNode) => {
  if (isDocLinkTag(docNode)) {
    return docNode.codeDestination?.memberReferences
      .map(({ memberIdentifier }) => memberIdentifier?.identifier)
      .filter((_) => !!_)
      .join('.')
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

const render = async (mdArgs: MdVariables): Promise<string> => {
  configure({
    views: resolve(__dirname, '..', 'docs', 'views'),
    autoEscape: false
  })

  const md = await renderFile(join('.', 'api'), mdArgs)

  return md || ''
}

const getSees = (docBlocks: readonly DocBlock[]) => {
  return docBlocks
    .map((docBlock) => {
      return docBlock.content.nodes
        .map((node) => {
          if (isDocParagraph(node)) {
            return node.nodes
              .map((node) => {
                if (isDocLinkTag(node)) {
                  return getDocLinkTag(node)
                }
                return ''
              })
              .filter((_) => !!_)
          }
          return []
        })
        .filter((_) => !!_)
    })
    .flat()
}

const getParams = ({ blocks }: DocParamCollection) =>
  blocks.map(({ content: _content, parameterName }) => {
    const content = _content.nodes
      .map((node) => {
        if (isDocParagraph(node)) {
          return node.nodes
            .map((node) => {
              if (node instanceof DocCodeSpan) {
                return `\`${node.code}\``
              } else if (node instanceof DocPlainText) {
                return node.text
              }
              return ''
            })
            .filter((_) => !!_)
            .join(' ')
        }
        return []
      })
      .join(' ')

    return [`\`${parameterName}\``, content] as [string, string]
  })

const getReturns = ({ content }: DocBlock) =>
  content.nodes
    .map((node) => {
      if (isDocParagraph(node)) {
        return node.nodes
          .map((node) => {
            if (node instanceof DocCodeSpan) {
              return `\`${node.code}\``
            } else if (node instanceof DocPlainText) {
              return node.text
            }
            return ''
          })
          .filter((_) => !!_)
          .join(' ')
      }
      return ''
    })
    .filter((_) => !!_)

const getCategories = (docBlocks: readonly DocBlock[]): string[] =>
  docBlocks
    .filter((docBlock) => docBlock.blockTag.tagName === '@category')
    .map(({ content }) =>
      content.nodes
        .map((node) => {
          if (isDocParagraph(node)) {
            return node.nodes
              .map((node) => {
                if (isDocCodeSpan(node)) {
                  return node.code
                }
                return ''
              })
              .filter((_) => !!_)
          }
          return []
        })

        .flat()
    )
    .flat()

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
  version: string | undefined
  params: [string, string][]
  returns: string[]
  sees: string[]
  categories: string[]
}

const generate = (path: string, content: string): void =>
  outputFileSync(path, content)

type ExportKind = 'Fn' | 'Type'
const mapMember = ({
  isLatest,
  type,
  moduleVersions
}: {
  isLatest: boolean
  type: ExportKind
  moduleVersions: Record<string, string | undefined>
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
      remarksBlock,
      returnsBlock,
      params: _params,
      seeBlocks
    } = member.tsdocComment

    const categories = getCategories(customBlocks)
    const sees = getSees(seeBlocks)
    const params = getParams(_params)
    const returns = returnsBlock ? getReturns(returnsBlock) : []
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
      test,
      version: moduleVersions[name],
      params,
      returns,
      sees,
      categories
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
  isLatest,
  moduleVersions,
  apiTable
}: {
  version: string
  apiJsonPath: string
  editLink?: boolean
  isLatest: boolean
  moduleVersions: Record<string, string | undefined>
  apiTable?: string
}): Promise<void> => {
  const apiPackage = apiModel.loadPackage(apiJsonPath)

  apiPackage.members.forEach(async (root) => {
    const functionContents = await Promise.all(
      root.members
        .filter(({ kind }) => kind === 'Variable')
        .map(mapMember({ isLatest, type: 'Fn', moduleVersions }))
    )

    const typesContents = await Promise.all(
      root.members
        .filter(({ kind }) => kind === 'TypeAlias')
        .map(mapMember({ isLatest, type: 'Type', moduleVersions }))
    )

    const mdFunctions = functionContents.filter((_) => !!_).map(({ md }) => md)
    const mdTypes = typesContents.filter((_) => !!_).map(({ md }) => md)
    const merged = mdFunctions.join('\n')
    const mergedTypesMd = mdTypes.join('\n')

    const frontmatter = `---
editLink: false
---

::: tip Info
This page is automatically generated from source code comments, tests, etc.
If there are any mistakes on this page, need to correct them.
If you find any mistakes, please report them as an [issue](https://github.com/TomokiMiyauci/fonction/issues).
:::

`

    generate(
      resolve(__dirname, '..', 'docs', 'api', version, 'index.md'),
      `${frontmatter}# API

Version: \`${isLatest ? 'Latest' : version}\`
{.my-1}

${apiTable}

## Functions

${merged}

## Types

${mergedTypesMd}

<span class="tag version ${
        isLatest ? 'latest' : 'past'
      } fixed bottom-10 right-10">
${isLatest ? 'Latest' : version}
</span>
`
    )
  })
}

const main = async () => {
  const moduleStarts = await getModuleStarts()
  const apiTable = getApiListTable()
  run({
    version: '',
    apiJsonPath: resolve(__dirname, '..', 'temp', 'fonction.api.json'),
    isLatest: true,
    moduleVersions: moduleStarts,
    apiTable
  })
}

if (require.main === module) {
  main()
}

export { run }
