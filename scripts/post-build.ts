import { removeSync } from 'fs-extra'
import { resolve } from 'path'

const dist = resolve(__dirname, '..', 'dist')
removeSync(resolve(dist, 'index.umd.d.ts'))
removeSync(resolve(dist, 'index.umd.d.ts.map'))
// removeSync('temp')
