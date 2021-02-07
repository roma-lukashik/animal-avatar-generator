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

const shapeGenerator = (shapes: Shape[], color: string) =>
  (seed: number) => pick(shapes, seed)(color)

const shapes = [
  faces,
  ears,
  muzzles,
  eyes,
  brows,
]

const createAvatar = (color: string) => shapes.map((x) => shapeGenerator(x, color))
const pickBackgroundColor = (seed: number) => pick(backgroundColors, seed)
const pickAvatarColor = (seed: number) => pick(avatarColors, seed)

const svgGenerator = (size: number, random: ReturnType<typeof seedrandom>) =>
  createSvg(
    size,
    createBackground(pickBackgroundColor(random())),
    ...createAvatar(pickAvatarColor(random())).map((fn) => fn(random())),
    createShadow(),
  )

export const avatar = (seed: string, size = 500): string =>
  svgGenerator(size, seedrandom(seed))

;(window as any).avatar = avatar
