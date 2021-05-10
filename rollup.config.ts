import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from '@wessberg/rollup-plugin-ts'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

import { main, module } from './package.json'

const config = [
  {
    input: 'temp/mod.ts',
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
    input: 'temp/mod.ts',
    plugins: [ts(), nodeResolve(), terser()],

    output: {
      file: module,
      format: 'es',
      sourcemap: true
    }
  },
  {
    input: 'dist/index.es.d.ts',
    output: { dir: 'dist', entryFileNames: 'index.es.d.ts' },
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
