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

export const createCircle = (
  cx: number,
  cy: number,
  r: number,
  color: string,
) => `
  <circle
    cx="${cx}"
    cy="${cy}"
    r="${r}"
    fill="${color}"
  />
`

export const createShadow = (width: number, height: number) => `
  <path
    d="
      M ${width / 2}, ${0}
      a ${width / 2},${height / 2} 0 1,1 ${0},${height}
    "
    fill="rgba(0,0,0,0.15)"
  />
`
