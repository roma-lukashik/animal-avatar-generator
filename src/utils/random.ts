export function* seedrandom (seed: string) {
  let value = hash(seed)
  const nextValue = () => value = xorshift32(value)
  while(true){
    yield nextValue()
  }
}

export function generateSeedRandom (seed: string){
  const seedRandomGen = seedrandom(seed)
  return ()=>seedRandomGen.next().value ?? 0
}

const xorshift32 = (value: number) =>
  shiftLeft(shiftRight(shiftLeft(value, 13), 17), 5)

const shiftLeft = (value: number, shift: number) => value ^ (value << shift)

const shiftRight = (value: number, shift: number) => value ^ (value >> shift)

const hash = (seed: string) =>
  seed.split('')
    .map((x) => x.charCodeAt(0))
    .reduce((hash, x) => toInt32((hash << 5) - hash + x), 0)

const toInt32 = (x: number) => x | 0
