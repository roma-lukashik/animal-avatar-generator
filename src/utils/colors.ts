export const darken = (hex: string, amount: number) =>
  rgb2Hex(
    hex2Rgb(hex)
      .map((x) => clamp(x - amount, 0, 255)),
  )

const hex2Rgb = (hex: string) =>
  hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r: string, g: string, b: string) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16))

const rgb2Hex = (rgb: number[]) =>
  '#' + rgb
    .map((x) => `0${x.toString(16)}`.substr(-2))
    .join('')

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export const rgba2hex = (orig: string) => {
  let a:string
    const rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || '').trim(),
      hex = rgb ?
    (parseInt(rgb[1]) | 1 << 8).toString(16).slice(1) +
    (parseInt(rgb[2]) | 1 << 8).toString(16).slice(1) +
    (parseInt(rgb[3]) | 1 << 8).toString(16).slice(1) : orig

  if (alpha !== '') {
    a = alpha
  } else {
    a = '01'
  }
  // multiply before convert to HEX
  a = ((parseInt(a) * 255) | 1 << 8).toString(16).slice(1)
  const newHex = hex
  return `#${newHex}`
}

const testIfRgba = (color: string)=> /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(color)

export const convertIfRgbaColor = (colors: string[]) =>
  colors.map((color: string)=>testIfRgba(color) ? rgba2hex(color) : color)
