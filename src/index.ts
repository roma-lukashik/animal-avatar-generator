import { pick } from './utils/array'
import { createBackground, createShadow, createSvg } from './utils/svg'
import { seedrandom } from './utils/random'
import { avatarColors, backgroundColors } from './palette'
import { Shape, faces, ears, muzzles, eyes, brows, patterns } from './shapes'

const optional = (shapes: Shape[], seed: number) =>
  shapes.map((shape) => seed % 2 ? shape : empty)

const empty = (_color: string) => ''

export const avatar = (seed: string, size = 500): string => {
  const random = seedrandom(seed)
  const backgroundColor = pick(backgroundColors, random())
  const avatarColor = pick(avatarColors, random())

  const shapes = [
    faces,
    optional(patterns, random()),
    ears,
    muzzles,
    eyes,
    brows,
  ]

  const createAvatar = () =>
    shapes
      .map((shape) => pick(shape, random()))
      .map((shape) => shape(avatarColor))
      .join('')

  return createSvg(
    size,
    createBackground(backgroundColor),
    createAvatar(),
    createShadow(),
  )
}

;(window as any).avatar = avatar
