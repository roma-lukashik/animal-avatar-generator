import { pick } from './utils/array'
import { createBackground, createBlackout, createSvg } from './utils/svg'
import { seedrandom } from './utils/random'
import { avatarColors as aColors, backgroundColors as bColors } from './palette'
import { Shape, faces, ears, muzzles, eyes, brows, patterns, hairs, emptyShape } from './shapes'

export type AvatarOptions = {
  size?: number | string;
  avatarColors?: string[];
  backgroundColors?: string[];
  blackout?: boolean;
  round?: boolean;
}

const avatar = (
  seed: string,
  {
    size = 150,
    avatarColors = aColors,
    backgroundColors = bColors,
    blackout = true,
    round = true,
  }: AvatarOptions = {},
): string => {
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
    createBackground(round, backgroundColor),
    createAvatar(),
    blackout ? createBlackout(round) : '',
  )
}

export default avatar
