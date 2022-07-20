export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export enum COLORS {
    lightViolet = 'rgba(66, 20, 232, 0.22)',
    violet = '#623CEA',
    lightGrey = '#D5D5D7',
    darkGrey = '#5A5C63',
    grey = '#9FA1A8',
    black = '#0C1618',
    red = '#F46036',
    green = '#8AC38F',
    blue = '#94B4D1',
    bg = '#F7F9F9',
}
