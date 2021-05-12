import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from '@wessberg/rollup-plugin-ts'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

import { main, module } from './package.json'

const baseDir = resolve(__dirname)
const outputDir = resolve(baseDir, 'dist')
const tempDir = resolve(baseDir, 'temp')
const inputFilePath = resolve(tempDir, 'mod.ts')
const declareFilePath = resolve(outputDir, 'index.es.d.ts')

const config = [
  {
    input: inputFilePath,
    // eslint-disable-next-line no-sparse-arrays
    plugins: [
      ts({
        tsconfig: (resolvedConfig) => ({
          ...resolvedConfig,
          declaration: false
        })
      }),
      ,
      nodeResolve(),
      terser()
    ],

    output: {
      file: main,
      format: 'umd',
      sourcemap: true,
      name: 'F'
    }
  },
  {
    input: inputFilePath,
    plugins: [ts(), nodeResolve(), terser()],

    output: {
      file: module,
      format: 'es',
      sourcemap: true
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
