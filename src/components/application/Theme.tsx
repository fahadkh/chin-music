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
      primary: "#f5f5f5",
      secondary: "#0fa093",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#252525",
    },
    spacing: 8,
    appBarHeight: 80,
    contentPercentage: "70%",
    maxContentWidth: 1250,
    colors: {
      black: "#000000",
      gray: "#353535",
    },
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
  spacing: number;
  appBarHeight: number;
  contentPercentage: string;
  maxContentWidth: number;
  colors: IColors;
  transitions: ITransitions;
}

interface IText {
  primary: string;
  secondary: string;
}

interface IPalette {
  primary: string;
  secondary: string;
}

interface IColors {
  black: string;
  gray: string;
}

interface ITransitions {
  makeTransitions: (transitions: string[], duration: string) => string;
  defaultDuration: string;
  defaultTransitionList: string[];
  defaultTransitions: string;
}
