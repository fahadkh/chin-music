import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

export const Title: React.FC<TitleProps> = (props) => {
  const classes = useStyles(props);
  return <h1 className={classes.title}>{props.children}</h1>;
};

export const SubTitle: React.FC<SubTitleProps> = (props) => {
  const classes = useStyles(props);
  return <h2 className={classes.subTitle}>{props.children}</h2>;
};

export const Body: React.FC<BodyProps> = (props) => {
  const classes = useStyles(props);
  return <p className={classes.body}>{props.children}</p>;
};

export const Link: React.FC<LinkProps> = (props) => {
  const classes = useStyles(props);
  return (
    <a href={props.url} className={classes.link}>
      {props.children}
    </a>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => {
  const themeStyling = {
    marginTop: theme.spacing,
    marginBottom: theme.spacing,
    color: theme.text.primary,
  };

  return {
    title: {
      ...themeStyling,
      fontSize: 38,
    },
    subTitle: {
      ...themeStyling,
    },
    body: {
      ...themeStyling,
      fontSize: 17,
      lineHeight: 1.4,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      letterSpacing: ".006em",
    },
    link: {
      ...themeStyling,
      textDecoration: "none",
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.palette.highlight,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
});

export interface TitleProps {}
export interface SubTitleProps {}
export interface BodyProps {}
export interface LinkProps {
  url: string;
  children: string;
}
