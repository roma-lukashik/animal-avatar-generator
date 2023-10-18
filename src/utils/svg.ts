export const createSvg = (size: number | string, ...children: string[]) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="${size}"
    height="${size}"
    viewBox="0 0 500 500"
  >
    ${children.join('')}
  </svg>
`

export const createBackground = (round: boolean, color: string) => `
  <rect
    width="500"
    height="500"
    rx="${round ? 250 : 0}"
    fill="${color}"
  />
`

export const createBlackout = (round: boolean) => `
  <path
    d="${round ? 'M250,0a250,250 0 1,1 0,500' : 'M250,0L500,0L500,500L250,500'}"
    fill="#15212a"
    fill-opacity="0.08"
  />
`
