import ts from '@wessberg/rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'

import { main, module } from './package.json'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  plugins: [ts(), terser()],

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
