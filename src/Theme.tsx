export const theme: ITheme = {
  palette: {
    primary: "cyan",
    secondary: "red"
  },
  spacing: 8
}

export interface ITheme {
  palette: IPalette
  spacing: Number
}

export interface IPalette {
  primary: String,
  secondary: String
}
