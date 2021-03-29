import { pick } from './utils/array'
import { createBackground, createShadow, createSvg } from './utils/svg'
import { seedrandom } from './utils/random'
import { avatarColors, backgroundColors } from './palette'
import { Shape, faces, ears, muzzles, eyes, brows, patterns, hairs, emptyShape } from './shapes'

const avatar = (seed: string, size = 500): string => {
  const random = seedrandom(seed)
  const backgroundColor = pick(backgroundColors, random())
  const avatarColor = pick(avatarColors, random())
  const optional = (shapes: Shape[]) =>
    shapes.map((shape) => random() % 2 ? shape : emptyShape)

  const shapes = [
    faces,
    optional(patterns),
    ears,
    optional(hairs),
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

export default avatar
