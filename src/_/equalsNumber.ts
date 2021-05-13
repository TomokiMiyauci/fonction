import { and } from '../and.ts'
import { or } from '../or.ts'

const equalsNumber = <T extends number, U extends T>(
  a: T,
  b: U
): T extends U ? true : false => {
  return or(a === b, and(isNaN(a), isNaN(b))) as T extends U ? true : false
}

export { equalsNumber }
