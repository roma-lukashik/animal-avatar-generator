const MIN = -(2 ** 31)
const MAX = (2 ** 31) - 1

export const pick = <T>(arr: T[], index: number): T => arr[integer(index, 0, arr.length - 1)]

const integer = (value: number, min: number, max: number) =>
  Math.floor(((value - MIN) / (MAX - MIN)) * (max + 1 - min) + min)
