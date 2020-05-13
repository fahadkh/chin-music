import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";
import { mixinStyles } from "../application/Styles";
import { NavLink } from "react-router-dom";

const MainContentLink: React.FC<IMainContentLinkProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <NavLink className={classes.root} to={props.to}>
      {props.children}
    </NavLink>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => {
  const focusOrHover = {
    margin: "-1px -1px -1px -1px",
    border: `1px solid ${theme.palette.secondary}`,
    color: theme.palette.secondary,
  };

  return {
    root: {
      color: theme.text.secondary,
      textDecoration: "none",
      fontSize: 20,
      fontWeight: 500,
      backgroundColor: `${theme.palette.primary}`,
      borderRadius: 4,
      padding: `${theme.spacing}px ${theme.spacing * 2}px`,
      transition: theme.transitions.defaultTransitions,
      "&:hover": focusOrHover,
      "&:focus": focusOrHover,
    },
  };
});

export interface IMainContentLinkProps {
  classes?: Record<string, string>;
  to: string;
}

export default MainContentLink;
