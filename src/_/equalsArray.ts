import { and } from '../and.ts'
import { equals } from '../equals.ts'
import { length } from '../length.ts'
import { N } from '../N.ts'

const equalsArray = <T extends unknown[], U extends T>(
  a: T,
  b: U
): T extends U ? true : false => {
  const lenA = length(a)
  const lenB = length(b)

  if (and(N(lenA), N(lenB))) return true as T extends U ? true : false
  if (lenA !== lenB) return false as T extends U ? true : false

  return a.every((v, index) => equals(v, b[index])) as T extends U
    ? true
    : false
}

export { equalsArray }
