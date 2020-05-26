import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

const ContentDivider: React.FC<ContentDividerProps> = (props) => {
  const classes: Record<string, string> = useStyles();

  return <div className={classes.root}>{props.children}</div>;
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
    height: 40,
  },
}));

export interface ContentDividerProps {
  classes?: Record<string, string>;
}

export default ContentDivider;
