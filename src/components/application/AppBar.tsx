import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { ChinTheme } from "./Theme";
import { mediaQuery, Breakpoints } from "./Typography";
import { mixinStyles, classNames } from "./Styles";

const scrollLimit = -4;

const AppBar: React.FC<AppBarProps> = (props) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= scrollLimit && scrolledToTop) {
      setScrolledToTop(false);
    } else if (currPos.y > scrollLimit && !scrolledToTop) {
      setScrolledToTop(true);
    }
  });

  const classes: Record<string, string> = mixinStyles(useStyles, {
    ...props,
    main: props.main && scrolledToTop,
  });

  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <span className={classes.logo}>ChinMusic</span>
        <span className={classNames(classes.logo, classes.logoHighlighted)}>
          Reviews
        </span>
      </div>
    </header>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: (props: AppBarProps) => (props.main ? 120 : theme.appBarHeight),
    width: "100%",
    position: "fixed",
    backgroundColor: (props: AppBarProps) =>
      props.main ? "unset" : `${theme.palette.primary}`,
    boxShadow: (props: AppBarProps) =>
      props.main ? "none" : "0 0 10px rgba(0,0,0,.3)",
    transition: "background-color 0.5s, height 0.5s",
    top: 0,
  },
  content: {
    display: "flex",
    alignSelf: "center",
    width: theme.contentPercentage,
    maxWidth: theme.maxContentWidth,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    alignSelf: "center",
    color: theme.text.primary,
    fontSize: 27,
    fontWeight: 500,
    fontFamily: "'Arimo',sans-serif",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  logoHighlighted: {
    color: theme.palette.highlight,
  },
  [mediaQuery(Breakpoints.small)]: {
    content: {
      width: "100%",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2,
    },
    logoHighlighted: {
      visibility: "hidden",
    },
  },
}));

export interface AppBarProps {
  classes?: Record<string, string>;
  main?: boolean;
}

export default AppBar;
