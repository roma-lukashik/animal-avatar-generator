import { random } from './random'

export const map = <T extends any, K extends any>(...functions: Array<(...x: T[]) => K>) =>
  (...args: T[]): K[] => functions.map((func) => func.apply(null, args))

export const pick = <T extends any>(arr: T[], key: string): T => random(key)(arr)
