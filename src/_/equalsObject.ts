import { and } from '../and.ts'
import { entries } from '../entries.ts'
import { equals } from '../equals.ts'
import { has } from '../has.ts'
import { length } from '../length.ts'
import { N } from '../N.ts'

const equalsObject = <T extends Record<string, any>, U extends T>(
  a: T,
  b: U
): T extends U ? true : false => {
  const entriesA = entries(a)
  const entriesB = entries(b)

  const lenA = length(entriesA)
  const lenB = length(entriesB)

  if (and(N(lenA), N(lenB))) return true as T extends U ? true : false
  if (lenA !== lenB) return false as T extends U ? true : false

  return entriesA.every(([key, value]) =>
    and(has(key, b), equals(value, b[key]))
  ) as T extends U ? true : false
}

export { equalsObject }
