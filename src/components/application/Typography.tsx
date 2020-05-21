import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";
import { classNames } from "./Styles";

export const Title: React.FC<TitleProps> = (props) => {
  const classes = useStyles(props);
  return <h1 className={classes.title}>{props.children}</h1>;
};

export const SubTitle: React.FC<SubTitleProps> = (props) => {
  const classes = useStyles(props);
  return <h2 className={classes.subTitle}>{props.children}</h2>;
};

export const SubTitleLink: React.FC<SubTitleLinkProps> = (props) => {
  const classes = useStyles(props);
  return makeLink(
    props.url,
    <h2 className={classNames(classes.subTitle, classes.baseLinkStyle)}>
      {props.children}
    </h2>
  );
};

export const Body: React.FC<BodyProps> = (props) => {
  const classes = useStyles(props);
  return <p className={classes.body}>{props.children}</p>;
};

export const BodyLink: React.FC<BodyLinkProps> = (props) => {
  const classes = useStyles(props);
  return makeLink(
    props.url,
    <p className={classNames(classes.body, classes.baseLinkStyle)}>
      {props.children}
    </p>
  );
};

export const Link: React.FC<LinkProps> = (props) => {
  const classes = useStyles(props);
  return (
    <a href={props.url} className={classes.link}>
      {props.children}
    </a>
  );
};

const makeLink = (url: string, child: JSX.Element) => {
  return (
    <a href={url} style={{ textDecoration: "unset" }}>
      {child}
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
      fontFamily: "'Arimo', sans-serif",
      fontSize: 38,
    },
    baseLinkStyle: {
      transition: "color 0.5s",
      "&:hover": {
        color: theme.palette.highlight,
        cursor: "pointer",
      },
    },
    subTitle: {
      ...themeStyling,
      fontFamily: "'Arimo', sans-serif",
      fontSize: (props: SubTitleProps) => props.size || 28,
    },
    body: {
      ...themeStyling,
      fontSize: 16,
      lineHeight: 1.4,
      fontWeight: 500,
      letterSpacing: ".008em",
      marginBlockStart: ".67em",
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
export interface SubTitleProps {
  size?: number;
}
export interface SubTitleLinkProps {
  url: string;
}
export interface BodyProps {}
export interface BodyLinkProps {
  url: string;
}
export interface LinkProps {
  url: string;
  children: string;
}
