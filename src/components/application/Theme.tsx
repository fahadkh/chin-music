const makeTransition = (transitions: string[], duration: string): string => {
  return transitions
    .map((transition) => `${transition} ${duration}`)
    .join(", ");
};

const themeCreator = (): ChinTheme => {
  const defaultDuration = ".25s";
  const defaultTransitionList = ["border-color", "color"];

  return {
    palette: {
      primary: "#000",
      secondary: "#252525",
      highlight: "#3eeab4",
      faded: "#D5D5D5",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#353535",
      faded: "#757575",
    },
    colors: {
      black: "#000000",
      gray: "#353535",
      lightGray: "#666",
    },
    appBarHeight: 80,
    spacing: 8,
    contentPercentage: "70%",
    maxContentWidth: 1250,
    transitions: {
      makeTransitions: makeTransition,
      defaultDuration: defaultDuration,
      defaultTransitionList: defaultTransitionList,
      defaultTransitions: makeTransition(
        defaultTransitionList,
        defaultDuration
      ),
    },
  };
};

export const theme = themeCreator();

export interface ChinTheme {
  palette: IPalette;
  text: IText;
  appBarHeight: number;
  spacing: number;
  contentPercentage: string;
  maxContentWidth: number;
  colors: IColors;
  transitions: ITransitions;
}

interface IText {
  primary: string;
  secondary: string;
  faded: string;
}

interface IPalette {
  primary: string;
  secondary: string;
  highlight: string;
  faded: string;
}

interface IColors {
  black: string;
  gray: string;
  lightGray: string;
}

interface ITransitions {
  makeTransitions: (transitions: string[], duration: string) => string;
  defaultDuration: string;
  defaultTransitionList: string[];
  defaultTransitions: string;
}
