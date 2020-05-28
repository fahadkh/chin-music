import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import AppBar from "../application/AppBar";

import ImageBackground from "../shared/ImageBackground";
import ContentDivider from "../shared/ContentDivider";

import { Article as ArticleType } from "./Types";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import articleData from "../../data/article.json";

const ArticleContainer = ({ match }: ArticleContainerProps) => {
  const classes: Record<string, string> = mixinStyles(useStyles, {});

  // TODO: grab article from API
  // const articleId = match.params.id;
  const article: ArticleType = articleData;

  return (
    <div className={classes.root}>
      <AppBar main />

      <main>
        <ImageBackground imageLink={article.image}>
          <ArticleTitle article={article} />
        </ImageBackground>

        <ContentDivider />

        <ArticleContent content={article.content} />
      </main>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Nunito', sans-serif",
    color: theme.text.primary,
    textAlign: "left",
  },
}));

interface ArticleContainerProps
  extends RouteComponentProps<ArticleContainerParams> {}

interface ArticleContainerParams {
  id: string;
}

export default ArticleContainer;
