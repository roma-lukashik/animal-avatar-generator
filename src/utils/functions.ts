import { integer } from './random'

export const pick = <T extends any>(arr: T[], index: number): T => arr[integer(index, 0, arr.length - 1)]
