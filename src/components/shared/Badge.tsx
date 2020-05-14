import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

const Badge: React.FC<BadgeProps> = (props) => {
  const classes = useStyles(props);

  return <div className={classes.root}>{props.children}</div>;
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    height: (props: BadgeProps) => props.height || 10,
    width: (props: BadgeProps) => props.width || "unset",
    backgroundColor: theme.palette.highlight,
    color: theme.text.primary,
  },
}));

export interface BadgeProps {
  classes?: Record<string, string>;
  height?: number;
  width?: number;
  children: string;
}

export default Badge;
