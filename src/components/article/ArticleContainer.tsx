import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import AppBar from "../application/AppBar";

const ArticleContainer = ({ match }: ArticleContainerProps) => {
  const classes: Record<string, string> = mixinStyles(useStyles, {});

  const articleId = match.params.id;

  return (
    <div className={classes.root}>
      <AppBar main />

      <main>Article for {articleId}</main>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Nunito', sans-serif",
    color: theme.text.primary,
  },
}));

interface ArticleContainerProps
  extends RouteComponentProps<ArticleContainerParams> {}

interface ArticleContainerParams {
  id: string;
}

export default ArticleContainer;
