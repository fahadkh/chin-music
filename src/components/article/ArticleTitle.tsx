import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles, containerStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import { Title, Body } from "../application/Typography";

import { Article as ArticleType } from "../article/Types";

const ArticleTitle = (props: ArticleTitleProps) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Title>{props.article.title}</Title>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.subTitle}>
        <Body>{props.article.subTitle}</Body>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    ...containerStyles(theme),
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    paddingTop: theme.spacing * 4,
  },
  subTitle: {
    paddingTop: theme.spacing,
    alignSelf: "center",
  },
  divider: {
    alignSelf: "center",
    borderBottom: `2px solid ${theme.palette.highlight}`,
    paddingTop: theme.spacing,
    width: "15%",
  },
}));

interface ArticleTitleProps {
  article: ArticleType;
}

export default ArticleTitle;
