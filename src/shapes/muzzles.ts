import { Shape } from './types'
import { darken } from '../utils/colors'

export const muzzles: Shape[] = [
  (_color) => `
    <g>
      <path fill="#fff" d="M299.89,307.23c0,34.96-22.34,63.29-49.89,63.29s-49.89-28.34-49.89-63.29s22.34-46.76,49.89-46.76S299.89,272.27,299.89,307.23z"/>
      <path fill="#f3252f" d="M250,315.06l12.26,7.75c0,23.05-24.12,23.17-24.37,0.36c0-0.12,0-0.24,0-0.36L250,315.06z"/>
      <path d="M285.22,315.94c-0.8-0.23-1.63,0.23-1.86,1.03c-0.83,2.89-3.06,4.81-6.63,5.7c-7.18,1.79-17.58-1.2-22.71-6.52c-0.52-0.54-0.96-1.09-1.34-1.64v-7.22c14.96-1.06,26.68-10.9,26.68-22.88c0-12.69-13.15-11.23-29.36-11.23s-29.36-1.46-29.36,11.23c0,12.01,11.77,21.86,26.77,22.88v7.06c-0.4,0.61-0.88,1.21-1.45,1.8c-5.14,5.32-15.54,8.3-22.71,6.52c-3.57-0.89-5.8-2.81-6.63-5.7c-0.23-0.79-1.06-1.26-1.86-1.03c-0.8,0.23-1.26,1.06-1.03,1.86c1.13,3.94,4.17,6.63,8.79,7.78c1.66,0.41,3.45,0.61,5.3,0.61c7.33,0,15.6-3.08,20.3-7.95c0.74-0.76,1.35-1.55,1.87-2.36c0.52,0.81,1.13,1.6,1.87,2.36c4.7,4.87,12.97,7.95,20.3,7.95c1.85,0,3.64-0.2,5.3-0.61c4.62-1.15,7.66-3.84,8.79-7.78C286.47,317,286.01,316.17,285.22,315.94z"/>
    </g>
  `,
  (_color) => `
    <g>
      <path fill="#fff" d="M324.74,343.45c0,34.41-33.46,29.75-74.74,29.75s-74.74,4.66-74.74-29.75s33.46-62.3,74.74-62.3S324.74,309.04,324.74,343.45z"/>
      <path d="M274.36,312.31c-0.83,0-1.5,0.67-1.5,1.5c0,5.95-5.54,8.66-10.68,8.66c-4.88,0-10.09-2.44-10.63-7.75v-14.36c13.02-0.09,23.34-1.46,23.34-10.08c0-8.95-11.15-16.21-24.89-16.21s-24.89,7.26-24.89,16.21c0,8.61,10.31,9.98,23.32,10.08v14.45h0.02c-0.59,5.25-5.78,7.66-10.62,7.66c-5.14,0-10.68-2.71-10.68-8.66c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5c0,3.63,1.53,6.68,4.41,8.82c2.47,1.83,5.76,2.83,9.27,2.83c4.87,0,9.78-2.07,12.17-6.06c0.72,1.22,1.69,2.31,2.92,3.22c2.47,1.83,5.76,2.83,9.27,2.83c6.8,0,13.68-4,13.68-11.66C275.86,312.98,275.19,312.31,274.36,312.31z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${darken(color, 30)}" d="M304.02,299.19c0,20.31-24.19,59.53-54.02,59.53s-54.02-39.23-54.02-59.53s24.19-36.77,54.02-36.77S304.02,278.89,304.02,299.19z"/>
      <path fill="#fff" d="M237.81,319.4c0,14.3,24.09,14.3,24.09,0c-5.99,1.09-9.82-1.05-12.04-5.62C246.92,318.53,242.95,320.52,237.81,319.4z"/>
      <path d="M274.58,312.22c-8.18,5.29-14.4,7.23-18.46,5.76c-2.36-0.85-4.02-2.86-5.08-6.1c15.64-0.67,28.14-16.14,28.14-27.54c0-11.66-13.07-14.64-29.19-14.64s-29.19,2.3-29.19,13.96c0,11.4,12.51,27.52,28.14,28.22c-1.06,3.24-2.72,5.25-5.08,6.1c-4.06,1.48-10.27-0.46-18.46-5.76c-0.46-0.3-1.08-0.17-1.38,0.3c-0.3,0.46-0.17,1.08,0.3,1.38c6.79,4.39,12.26,6.56,16.59,6.56c1.32,0,2.53-0.2,3.64-0.6c2.35-0.85,4.17-2.62,5.45-5.24c1.28,2.62,3.1,4.39,5.45,5.24c1.11,0.4,2.32,0.6,3.64,0.6c4.32,0,9.79-2.17,16.59-6.56c0.46-0.3,0.6-0.92,0.3-1.38S275.05,311.92,274.58,312.22z"/>
    </g>
  `,
  (_color) => `
    <g>
      <path fill="#fff" d="M307.96,289.57c-15.71-5.2-36.27-0.15-57.96,7.29c-21.69-7.44-42.25-12.49-57.96-7.29c-20.24,6.69-25.77,32.22-10.87,47.46c8.15,8.33,19.15,11.34,32.66,9.65c24.05-3,48.31-3,72.35,0c13.51,1.69,24.51-1.32,32.66-9.65C333.74,321.79,328.2,296.27,307.96,289.57z"/>
      <path d="M266.79,301.4c0,9.27-7.52,7.6-16.79,7.6s-16.79,1.68-16.79-7.6s7.52-16.79,16.79-16.79S266.79,292.13,266.79,301.4z"/>
      <polygon fill="#a1a6b7" points="254.95,320.22 252.11,318.4 250,315.6 250,315.6 250,315.6 250,315.6 250,315.6 247.89,318.4 245.05,320.22 241.26,320.39 244.96,329.77 250,329.77 250,329.77 255.04,329.77 258.74,320.39"/>
      <path d="M264.36,312.75c-0.33,0-0.59,0.26-0.59,0.59c0,4.54-3.42,6.61-6.59,6.61s-6.59-2.07-6.59-6.61v-5.19h-1.18v5.19c0,4.54-3.41,6.61-6.59,6.61c-3.17,0-6.59-2.07-6.59-6.61c0-0.33-0.26-0.59-0.59-0.59s-0.59,0.26-0.59,0.59c0,5.12,3.91,7.8,7.77,7.8c2.96,0,5.95-1.58,7.18-4.63c1.23,3.05,4.22,4.63,7.18,4.63c3.86,0,7.77-2.68,7.77-7.8C264.95,313.01,264.68,312.75,264.36,312.75z"/>
      <rect x="249.41" y="312.96" class="st33" width="1.18" height="9.72"/>
    </g>
  `,
  (color) => `
    <g>
      <ellipse fill="${darken(color, 30)}" cx="250" cy="299.34" rx="39.68" ry="27.57"/>
      <path fill="${darken(color, 60)}" d="M229.14,315.35c-1.25,1.4-3.37,1.68-5.46,0.91c-0.93-0.32-1.85-0.86-2.69-1.6c-0.89-0.79-1.57-1.72-2.01-2.67c-0.9-1.93-0.83-3.98,0.37-5.34c1.32-1.48,3.61-1.71,5.81-0.78c0.81,0.33,1.6,0.82,2.33,1.47c0.76,0.67,1.37,1.44,1.8,2.23C230.41,311.63,230.43,313.89,229.14,315.35z"/>
      <path fill="${darken(color, 60)}" d="M281.06,312.05c-0.45,0.93-1.12,1.83-1.99,2.61c-0.85,0.76-1.79,1.3-2.74,1.62c-2.07,0.74-4.17,0.45-5.4-0.93c-1.28-1.44-1.28-3.66-0.2-5.69c0.44-0.83,1.06-1.62,1.84-2.32c0.72-0.64,1.5-1.13,2.3-1.46c2.21-0.94,4.53-0.71,5.84,0.77C281.93,308.02,281.98,310.1,281.06,312.05z"/>
      <path d="M281.06,312.05c-1.43-2.09-3.25-4-5.39-5.71c-0.25-0.2-0.52-0.35-0.8-0.46c-0.8,0.33-1.58,0.82-2.3,1.46c-0.78,0.7-1.4,1.49-1.84,2.32c0.17,0.59,0.53,1.13,1.05,1.54c1.9,1.51,3.44,3.22,4.55,5.08c1.27,2.13,1.97,4.44,1.97,6.85c0,10.31-12.7,18.7-28.3,18.7s-28.3-8.39-28.3-18.7c0-2.42,0.7-4.74,1.98-6.87c1.11-1.85,2.64-3.55,4.54-5.06c0.55-0.43,0.91-1.01,1.07-1.63c-0.43-0.79-1.04-1.56-1.8-2.23c-0.73-0.65-1.52-1.14-2.33-1.47c-0.29,0.11-0.57,0.27-0.83,0.47c-2.12,1.69-3.93,3.59-5.35,5.65c-2.31,3.36-3.62,7.14-3.62,11.14c0,13.81,15.54,25.05,34.64,25.05s34.64-11.24,34.64-25.05C284.64,319.16,283.35,315.39,281.06,312.05z"/>
    </g>
  `,
  (_color) => `
    <g>
      <ellipse fill="#fff" class="st29" cx="250" cy="314.96" rx="73.68" ry="48.26"/>
      <path fill="#4f3a29" d="M270.06,272c0,11.09-8.99,20.09-20.09,20.09c-11.09,0-20.09-8.99-20.09-20.09s8.99-13.68,20.09-13.68C261.07,258.32,270.06,260.91,270.06,272z"/>
      <path fill="#ebb092" d="M240.19,306.02c0,21.33,19.57,21.33,19.57,0l-7.26-3.6l-3.38-3.48l-3.32,6.03L240.19,306.02z"/>
      <path fill="#4f3a29" d="M270.21,291.93c-0.82-0.05-1.54,0.57-1.6,1.4c-0.33,4.91-2.36,8.63-5.57,10.21c-2.39,1.17-5.14,0.99-7.36-0.49c-2.54-1.7-4.01-4.85-4.18-8.79c0.01-0.3-0.01-0.61-0.01-0.91c0-0.38,0-0.76,0.02-1.16c0.06-0.83-0.57-1.54-1.4-1.6c-0.04,0-0.07,0-0.11,0c-0.05,0-0.09-0.01-0.14,0c-0.83,0.06-1.45,0.77-1.4,1.6c0.03,0.4,0.02,0.78,0.02,1.17c0,0.3-0.02,0.61-0.01,0.9c-0.17,3.94-1.64,7.08-4.18,8.79c-2.21,1.48-4.96,1.67-7.36,0.49c-3.21-1.58-5.24-5.3-5.57-10.21c-0.06-0.83-0.77-1.45-1.6-1.4c-0.83,0.06-1.45,0.77-1.4,1.6c0.4,6.01,3.04,10.64,7.24,12.7c1.47,0.72,3.04,1.08,4.59,1.08c2.01,0,4-0.59,5.76-1.77c1.74-1.17,3.08-2.82,4.02-4.81c0.94,1.99,2.28,3.64,4.02,4.81c1.75,1.18,3.75,1.77,5.76,1.77c1.56,0,3.12-0.36,4.59-1.08c4.2-2.07,6.84-6.69,7.24-12.7C271.66,292.7,271.04,291.98,270.21,291.93z"/>
    </g>
  `,
  (_color) => `
    <g>
      <path d="M278.25,286.24c-1.1,0-2,0.9-2,2c0,9.44-12.1,14.57-24.57,14.99v-13.25h-3.4v13.25c-12.46-0.43-24.53-5.56-24.53-14.99c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,6.04,3.42,11.07,9.89,14.53c5.41,2.9,12.64,4.49,20.37,4.49c14.57,0,30.26-5.95,30.26-19.02C280.25,287.14,279.36,286.24,278.25,286.24z"/>
      <path d="M272.36,274.91c0-6.35-10.06-11.49-22.47-11.49s-22.47,5.14-22.47,11.49c0,2.08,1.08,4.02,2.97,5.71h0l0,0c0.92,0.82,1.96,1.73,3.22,2.4l8.69,5.74c4.58,3.13,10.6,3.14,15.19,0.04l9.74-6.58c0.36-0.22,0.7-0.45,1.02-0.69l0.04-0.02l0,0C270.86,279.63,272.36,277.36,272.36,274.91z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="#fff" d="M327.4,390.19c-23.65,3.61-49.84,4.89-77.4,4.89c-27.55,0-53.74-1.28-77.4-4.9c1.86-64.15,4.82-127.36,77.4-130.8C322.59,262.82,325.54,326.04,327.4,390.19z"/>
      <path fill="${darken(color, 30)}" d="M238.9,262.13c-12.83,7.11-21.24,25.33-24.71,55.94L250,314.4l35.81,3.67c-3.47-30.61-11.88-48.83-24.71-55.94C254.49,258.47,245.51,258.47,238.9,262.13z"/>
      <path d="M286.53,319.68c0,9.98-16.36,18.08-36.53,18.08s-36.53-8.09-36.53-18.08s16.36-9.5,36.53-9.5S286.53,309.7,286.53,319.68z"/>
      <path fill="none" stroke="#000" stroke-width="4" d="M232.13,352.01c17.61-1.45,34.08-0.63,43.23,14.84"/>
      <rect x="248.32" y="336.53" width="3.74" height="14.13"/>
    </g>
  `,
]
