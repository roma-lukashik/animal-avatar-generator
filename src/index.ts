import { map, pick } from './utils/functions'
import { createCircle, createShadow, createSvg } from './utils/svg'
import { avatarColors, backgroundColors } from './palette'
import { Shape } from './shapes/types'
import { ears } from './shapes/ears'
import { faces } from './shapes/faces'
import { muzzles } from './shapes/muzzles'
import { eyes } from './shapes/eyes'
import { brows } from './shapes/brows'

const generateBackground = (key: string) => createCircle(pick(backgroundColors, key))
const generateFace = (key: string) => generateShape(faces, avatarColors, key)
const generateEar = (key: string) => generateShape(ears, avatarColors, key)
const generateMuzzle = (key: string) => generateShape(muzzles, avatarColors, key)
const generateEye = (key: string) => generateShape(eyes, avatarColors, key)
const generateBrows = (key: string) => generateShape(brows, avatarColors, key)
const generateShadow = (_key: string) => createShadow()

const generateShape = (shapes: Shape[], palette: string[], key: string): ReturnType<Shape> =>
  pick(shapes, key)(pick(palette, key))

const generateAvatar = map(
  generateBackground,
  generateFace,
  generateEar,
  generateMuzzle,
  generateEye,
  generateBrows,
  generateShadow,
)

export const avatar = (key: string, size = 500): string =>
  createSvg(size, ...generateAvatar(key))

;(window as any).avatar = avatar
