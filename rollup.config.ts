import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from '@wessberg/rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'

import { main, module } from './package.json'

const config = {
  input: 'temp/mod.ts',
  plugins: [ts(), nodeResolve(), terser()],

  output: [
    {
      file: main,
      format: 'umd',
      sourcemap: true,
      name: 'Fonction'
    },
    {
      file: module,
      format: 'es',
      sourcemap: true
    }
  ]
}

export default config
