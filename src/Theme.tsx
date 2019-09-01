export const theme: ITheme = {
  palette: {
    primary: "#d2d2d2",
    secondary: "#d2d2d2"
  },
  text: {
    primary: "#d2d2d2",
    secondary: "#c7c7c7"
  },
  spacing: 8,
  appBarHeight: 76,
  contentPercentage: "70%",
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
  contentPercentage: string
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
