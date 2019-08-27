export const theme: ITheme = {
  palette: {
    primary: "#2a363b",
    secondary: "#34495e"
  },
  text: {
    primary: "#fff",
    secondary: "#666"
  },
  spacing: 8
}

//#2a363b

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
