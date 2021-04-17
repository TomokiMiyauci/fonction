type IsArray<T> = T extends any[] ? true : false

const isArray = <T>(val: unknown): val is T[] => Array.isArray(val)

type cccc = IsArray<[[]]>
const a = [1]
if (isArray(a)) {
  type bb = typeof a
  type cc = bb[number]
} else {
  a
}

export { isArray }
