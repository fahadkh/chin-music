import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import MainContentSearch from "./MainContentSearch";

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    alignSelf: "center",
    width: theme.contentPercentage,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: theme.maxContentWidth,
  },
  "@media (max-width: 768px)": {
    root: {
      width: "100%",
      alignSelf: "center",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2,
    },
  },
}));

const MainContent: React.FC<IMainContentProps> = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <MainContentSearch />
    </div>
  );
};

export interface IMainContentProps {
  classes?: Record<string, string>;
}

export default MainContent;
