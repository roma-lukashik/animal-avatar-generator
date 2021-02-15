import { seedrandom } from './random'

describe('random', () => {
  describe('#seedrandom', () => {
    it('returns proper sequence of random numbers', () => {
      const random = seedrandom('seed')

      expect(random()).toBe(-2038275316)
      expect(random()).toBe(-1768109603)
      expect(random()).toBe(-78991410)
    })

    it('returns proper sequence of random numbers', () => {
      const random = seedrandom('test')

      expect(random()).toBe(-601360192)
      expect(random()).toBe(1153614527)
      expect(random()).toBe(-1909411243)
    })
  })
})
