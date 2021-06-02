const makeTransition = (transitions: string[], duration: string): string => {
  return transitions
    .map((transition) => `${transition} ${duration}`)
    .join(", ");
};

const makeSpacing = (multiplier?: number, ...otherMultipliers: number[]) => {
  const spacing = 8;
  const xOrDefault = multiplier !== undefined ? multiplier : 1;

  return [xOrDefault, ...otherMultipliers.slice(0, 4)]
    .map((multiplier) => (multiplier ? `${multiplier * spacing}px` : 0))
    .join(" ");
};

const themeCreator = (): ChinTheme => {
  const defaultDuration = ".25s";
  const defaultTransitionList = ["border-color", "color"];

  return {
    palette: {
      primary: "#000000",
      secondary: "#151515",
      highlight: "#3eeab4",
      faded: "#D5D5D5",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#353535",
      faded: "#757575",
    },
    colors: {
      black: "#000000",
      gray: "#353535",
      lightGray: "#666666",
    },
    appBarHeight: 80,
    spacing: makeSpacing,
    contentPercentage: "75%",
    maxContentWidth: 1280,
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
  appBarHeight: number;
  colors: Colors;
  contentPercentage: string;
  maxContentWidth: number;
  palette: Palette;
  spacing: (multiplier?: number, ...otherMultipliers: number[]) => string;
  text: Text;
  transitions: Transitions;
}

type Text = {
  faded: string;
  primary: string;
  secondary: string;
};

type Palette = {
  faded: string;
  highlight: string;
  primary: string;
  secondary: string;
};

type Colors = {
  black: string;
  gray: string;
  lightGray: string;
};

type Transitions = {
  defaultDuration: string;
  defaultTransitionList: string[];
  defaultTransitions: string;
  makeTransitions: (transitions: string[], duration: string) => string;
};
