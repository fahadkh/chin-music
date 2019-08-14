export const theme: ITheme = {
  palette: {
    primary: "#1abc9c",
    secondary: "#34495e"
  },
  text: {
    primary: "#000",
    secondary: "#666"
  },
  spacing: 8
}

export interface ITheme {
  palette: IPalette
  text: IText
  spacing: number
}

interface IText {
  primary: string
  secondary: string
}

interface IPalette {
  primary: string,
  secondary: string
}
