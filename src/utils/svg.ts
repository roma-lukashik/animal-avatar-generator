export const createSvg = (width: number, height: number, ...children: string[]) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="${width}"
    height="${height}"
    viewBox="0 0 500 500"
  >
    ${children.join('')}
  </svg>
`

export const createCircle = (color: string) => `
  <circle
    cx="250"
    cy="250"
    r="250"
    fill="${color}"
  />
`

export const createShadow = () => `
  <path
    d="M250,0a250,250 0 1,1 0,500"
    fill-opacity="0.08"
  />
`
