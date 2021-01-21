import { Shape } from './types'

export const eyes: Shape[] = [
  (color: string) => `
    <g>
      <g>
        <circle fill="#fff" cx="203.51" cy="206.23" r="22.89"/>
        <circle fill="${color}" cx="203.51" cy="206.23" r="16.51"/>
        <circle fill="#000" cx="203.51" cy="206.23" r="8.47"/>
        <ellipse fill="#fff" transform="matrix(0.6274 -0.7787 0.7787 0.6274 -74.8694 238.6789)" cx="211.98" cy="197.58" rx="6.48" ry="4.07"/>
        <ellipse fill="#fff" transform="matrix(0.6274 -0.7787 0.7787 0.6274 -97.7649 231.993)" cx="193.54" cy="218.16" rx="3.16" ry="2.6"/>
      </g>
      <g>
        <circle fill="#fff" cx="296.35" cy="206.23" r="22.89"/>
        <circle fill="${color}" cx="296.35" cy="206.23" r="16.51"/>
        <circle fill="#000" cx="296.35" cy="206.23" r="8.47"/>
        <ellipse fill="#fff" transform="matrix(0.6274 -0.7787 0.7787 0.6274 -40.2774 310.9746)" cx="304.82" cy="197.58" rx="6.48" ry="4.07"/>
        <ellipse fill="#fff" transform="matrix(0.6274 -0.7787 0.7787 0.6274 -63.1728 304.2887)" cx="286.39" cy="218.16" rx="3.16" ry="2.6"/>
      </g>
    </g>
  `,
  (color: string) => `
    <g>
      <g>
        <circle fill="#fff" cx="296.35" cy="206.13" r="22.23"/>
        <ellipse fill="${color}" cx="296.35" cy="206.13" rx="9.28" ry="21.63"/>
        <ellipse fill="#000" cx="296.35" cy="206.13" rx="2.75" ry="20.2"/>
        <ellipse fill="#fff" transform="matrix(0.6808 -0.7325 0.7325 0.6808 -47.2751 285.8439)" cx="304.31" cy="197.16" rx="8.21" ry="4.64"/>
        <ellipse fill="#fff" transform="matrix(0.6808 -0.7325 0.7325 0.6808 -62.0478 281.9344)" cx="292.43" cy="212.15" rx="3.58" ry="2.88"/>
      </g>
      <g>
        <circle fill="#fff" cx="203.65" cy="206.13" r="22.23"/>
        <ellipse fill="${color}" cx="203.65" cy="206.13" rx="9.28" ry="21.63"/>
        <ellipse fill="#000" cx="203.65" cy="206.13" rx="2.75" ry="20.2"/>
        <ellipse fill="#fff" transform="matrix(0.6808 -0.7325 0.7325 0.6808 -76.8706 217.9353)" cx="211.6" cy="197.16" rx="8.21" ry="4.64"/>
        <ellipse fill="#fff" transform="matrix(0.6808 -0.7325 0.7325 0.6808 -91.6433 214.0258)" cx="199.73" cy="212.15" rx="3.58" ry="2.88"/>
      </g>
    </g>
  `,
  (_color: string) => `
    <g>
      <g>
        <circle fill="#fff" cx="203.65" cy="206.13" r="32.51"/>
        <circle fill="#000" cx="203.65" cy="206.13" r="27.61"/>
        <circle fill="#fff" cx="219.14" cy="191.16" r="8.55"/>
        <circle fill="#fff" cx="190.71" cy="218.73" r="4.73"/>
      </g>
      <g>
        <circle fill="#fff" cx="296.35" cy="206.13" r="32.51"/>
        <circle fill="#000" cx="296.35" cy="206.13" r="27.61"/>
        <circle fill="#fff" cx="311.84" cy="191.16" r="8.55"/>
        <circle fill="#fff" cx="283.42" cy="218.73" r="4.73"/>
      </g>
    </g>
  `,
]
