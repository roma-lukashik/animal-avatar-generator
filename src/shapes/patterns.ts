import { Shape } from './types'
import { darken } from '../utils/colors'

export const patterns: Shape[] = [
  (color) => `
    <path fill="${darken(color, -30)}" d="M156 387.1c-57.8-12.3-96.7-42-96.7-107 0-9.4.8-18.6 2.4-27.6 19.1 3.4 39.3 17 53.6 38.1a105 105 0 015 8.2 73.6 73.6 0 0021 23.8c4.9 3.6 9.5 8.3 13.3 14 12.3 18.2 12.6 40 1.3 50.5z"/>
  `,
  (color) => `
    <ellipse cx="323.8" cy="217.4" fill="${darken(color, -30)}" rx="52.3" ry="77.6" transform="rotate(-32.5 323.8 217.4)"/>
  `,
  (color) => `
    <path fill="${darken(color, -30)}" d="M235 161.3c14.4 27.5 0 71-41.1 115.2-31.8 34.1-86.6 16.8-101-10.8s7.5-67.4 48.9-89 78.9-43 93.3-15.4z"/>
  `,
]
