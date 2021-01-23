import { darken } from './colors'

describe('colors', () => {
  describe('#darken', () => {
    it('returns proper colors', () => {
      expect(darken('#000', 20)).toBe('#000000')
      expect(darken('#fff', 20)).toBe('#ebebeb')
      expect(darken('#f1f1f1', 20)).toBe('#dddddd')
    })

    it('works the same with short and long hex color representation', () => {
      expect(darken('#fe3', 20)).toBe('#ebda1f')
      expect(darken('#ffee33', 20)).toBe('#ebda1f')
    })

    it.todo('handles exceptions')
  })
})
