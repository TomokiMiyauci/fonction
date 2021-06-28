import replace from '@rollup/plugin-replace'
import ts from '@wessberg/rollup-plugin-ts'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

import { dependencies, main, module } from './package.json'

const baseDir = resolve(__dirname)
const outputDir = resolve(baseDir, 'dist')
const inputFilePath = resolve(baseDir, 'mod.ts')
const declareFilePath = resolve(outputDir, 'index.es.d.ts')
const replaceOption = {
  '.ts': '',
  'https://x.nest.land/arithmetic4@0.1.1/mod': 'arithmetic4',
  'https://deno.land/x/equal@v1.5.0/mod': 'lauqe',
  'https://deno.land/x/curry@v1.0.0/mod': 'curry-rice',
  preventAssignment: true
}
const banner =
  '/*! Copyright (c) 2021-present the Fonction authors. All rights reserved. MIT license. */'
const external = Object.keys(dependencies)

const config = [
  {
    input: inputFilePath,
    // eslint-disable-next-line no-sparse-arrays
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: 'babel',
        tsconfig: (resolvedConfig) => ({
          ...resolvedConfig,
          declaration: false
        })
      }),
      ,
      terser()
    ],

    external,

    output: {
      file: main,
      format: 'cjs',
      sourcemap: true,
      banner
    }
  },
  {
    input: inputFilePath,
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: 'babel'
      }),
      terser()
    ],

    external,

    output: {
      file: module,
      format: 'es',
      sourcemap: true,
      banner
    }
  },
  {
    input: declareFilePath,
    output: { file: declareFilePath },

    plugins: [
      dts({
        respectExternal: true,
        compilerOptions: {
          declarationMap: true
        }
      })
    ]
  }
]

export default config
