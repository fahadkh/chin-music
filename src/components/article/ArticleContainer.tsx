import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import AppBar from "../application/AppBar";

import ImageBackground from "../shared/ImageBackground";
import ContentDivider from "../shared/ContentDivider";

const ArticleContainer = ({ match }: ArticleContainerProps) => {
  const classes: Record<string, string> = mixinStyles(useStyles, {});

  const articleId = match.params.id;

  return (
    <div className={classes.root}>
      <AppBar main />

      <main>
        <ImageBackground>
          <div> Article for {articleId} </div>
        </ImageBackground>

        <ContentDivider />
      </main>
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
