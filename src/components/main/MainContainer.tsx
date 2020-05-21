import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import AppBar from "../application/AppBar";

import ScrollIndicator from "../shared/ScrollIndicator";

import MainFeatureWrapper from "./MainFeatureWrapper";
import MainFeature, { FeaturedArticle } from "./MainFeature";

import featured from "../../data/featured.json";

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
          <ScrollIndicator text={"View More Posts"} size={18} />
        </MainFeatureWrapper>

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
  divider: {
    backgroundColor: theme.palette.primary,
    height: 40,
  },
  bottom: {
    position: "absolute",
    bottom: 10,
  },
}));

export interface MainContainerProps {
  classes?: Record<string, string>;
}

export default MainContainer;
