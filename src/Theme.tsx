export const theme: ITheme = {
  palette: {
    primary: "#2a363b",
    secondary: "#34495e"
  },
  text: {
    primary: "#d2d2d2",
    secondary: "#666"
  },
  spacing: 8,
  appBarHeight: 80,
  colors: {
    black: "#111111"
  }
}

//#2a363b

export interface ITheme {
  palette: IPalette
  text: IText
  spacing: number
  appBarHeight: number
  colors: IColors
}

interface IText {
  primary: string
  secondary: string
}

interface IPalette {
  primary: string,
  secondary: string
}

interface IColors {
  black: string
}
