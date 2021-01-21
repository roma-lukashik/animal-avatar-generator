const MIN = -(2 ** 31)
const MAX = (2 ** 31) - 1

export const random = (key: string) => {
  let value = hash(key)
  const next = () => value = xorshift(value)
  return <T extends any>(arr: T[]): T => arr[integer(next(), 0, arr.length - 1)]
}

const integer = (value: number, min: number, max: number) =>
  Math.floor(((value - MIN) / (MAX - MIN)) * (max + 1 - min) + min)

const hash = (key: string) =>
  key.split('')
    .map((x) => x.charCodeAt(0))
    .reduce((hash, x) => xorshift(((hash << 5) - hash + x) | 0), 0)

const xorshift = (value: number) =>
  shiftLeft(shiftRight(shiftLeft(value, 13), 17), 5)

const shiftLeft = (value: number, shift: number) => value ^ (value << shift)

const shiftRight = (value: number, shift: number) => value ^ (value >> shift)
