import { map, pick } from './utils/functions'
import { createCircle, createShadow, createSvg } from './utils/svg'
import { avatarColors, backgroundColors } from './palette'
import { bodies } from './shapes/bodies'
import { Shape } from './shapes/types'
import { ears } from './shapes/ears'
import { faces } from './shapes/faces'
import { muzzles } from './shapes/muzzles'
import { eyes } from './shapes/eyes'
import { brows } from './shapes/brows'

const size = 500

const generateBackground = (key: string) =>
  createCircle(size / 2, size / 2, size / 2, pick(backgroundColors, key))

const generateBody = (key: string) => generateShape(bodies, avatarColors, key)
const generateEar = (key: string) => generateShape(ears, avatarColors, key)
const generateFace = (key: string) => generateShape(faces, avatarColors, key)
const generateMuzzle = (key: string) => generateShape(muzzles, avatarColors, key)
const generateEye = (key: string) => generateShape(eyes, avatarColors, key)
const generateBrows = (key: string) => generateShape(brows, avatarColors, key)

const generateShape = (shapes: Shape[], palette: string[], key: string): ReturnType<Shape> =>
  pick(shapes, key)(pick(palette, key))

const generateAvatar = map(
  generateBackground,
  generateBody,
  generateEar,
  generateFace,
  generateMuzzle,
  generateEye,
  generateBrows,
)

export const avatar = (key: string): string =>
  createSvg(
    size,
    size,
    ...generateAvatar(key),
    createShadow(size, size),
  )

;(window as any).avatar = avatar
