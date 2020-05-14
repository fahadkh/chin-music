import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import MainFeatureWrapper from "./MainFeatureWrapper";
import MainFeature from "./MainFeature";
import { mixinStyles } from "../application/Styles";
import AppBar from "../application/AppBar";

import { FeaturedArticle } from "./MainFeature";

import featured from "../../data/featured.json";

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Oswald', sans-serif",
    color: theme.text.primary,
  },
  divider: {
    backgroundColor: theme.palette.primary,
    height: 40,
  },
}));

const ContentDivider: React.FC = (props) => {
  const classes: Record<string, string> = useStyles();

  return <div className={classes.divider}>{props.children}</div>;
};

const MainContainer: React.FC<MainContainerProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  // TODO: Fetch featured gif, article, and recent article links
  const featuredArticle: FeaturedArticle = featured;

  return (
    <div className={classes.root}>
      <AppBar main />
      <main>
        <MainFeatureWrapper imageLink={featuredArticle.image}>
          <MainFeature featuredArticle={featuredArticle} />
        </MainFeatureWrapper>

        <ContentDivider />
      </main>
    </div>
  );
};

export interface MainContainerProps {
  classes?: Record<string, string>;
}

export default MainContainer;
