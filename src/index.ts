import { pick } from './utils/functions'
import { createBackground, createShadow, createSvg } from './utils/svg'
import { seedrandom } from './utils/random'
import { avatarColors, backgroundColors } from './palette'
import { Shape } from './shapes/types'
import { ears } from './shapes/ears'
import { faces } from './shapes/faces'
import { muzzles } from './shapes/muzzles'
import { eyes } from './shapes/eyes'
import { brows } from './shapes/brows'

const shapes = [
  faces,
  ears,
  muzzles,
  eyes,
  brows,
]

const pickShape = (shapes: Shape[], seed: number) => pick(shapes, seed)
const pickAvatarColor = (seed: number) => pick(avatarColors, seed)
const pickBackgroundColor = (seed: number) => pick(backgroundColors, seed)

export const avatar = (seed: string, size = 500): string => {
  const random = seedrandom(seed)
  const backgroundColor = pickBackgroundColor(random())
  const avatarColor = pickAvatarColor(random())
  const createAvatar = () =>
    shapes
      .map((shape) => pickShape(shape, random()))
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
