import { map, pick } from './utils/functions'
import { createCircle, createShadow, createSvg } from './utils/svg'
import { avatarColors, backgroundColors } from './palette'
import { Shape } from './shapes/types'
import { ears } from './shapes/ears'
import { faces } from './shapes/faces'
import { muzzles } from './shapes/muzzles'
import { eyes } from './shapes/eyes'
import { brows } from './shapes/brows'

const shapeGenerator = (shapes: Shape[], palette: string[]) =>
  (key: string): string => pick(shapes, key)(pick(palette, key))

const generateBackground = (key: string) => createCircle(pick(backgroundColors, key))
const generateFace = shapeGenerator(faces, avatarColors)
const generateEar = shapeGenerator(ears, avatarColors)
const generateMuzzle = shapeGenerator(muzzles, avatarColors)
const generateEye = shapeGenerator(eyes, avatarColors)
const generateBrows = shapeGenerator(brows, avatarColors)

const generateAvatar = map(
  generateBackground,
  generateFace,
  generateEar,
  generateMuzzle,
  generateEye,
  generateBrows,
  createShadow,
)

export const avatar = (key: string, size = 500): string =>
  createSvg(size, ...generateAvatar(key))

;(window as any).avatar = avatar
